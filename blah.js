// @ts-check
/*
  Refactoring steps:
  - wrap all fs write calls, and also write the output to memory
  - write a test suite that does assertions based on what's in memory afterwards
  - make a subdirectory with some test markdown files to be used for this purpose
*/
const { extname, basename, join, relative, parse } = require('path')
const { statSync } = require('fs')
const { cat, ShellString, exec, cp, test, mkdir } = require('shelljs')
const matter = require('gray-matter')
const marked = require('marked')
const prism = require('prismjs')
const loadLanguages = require('prismjs/components/')

const DEBUG = process.argv.includes('-v')
if (DEBUG) function l() { console.log.apply(console.log, arguments) }
else function l(){}

const ROOT = process.cwd()
l('ROOT', ROOT)
const DIST = join(ROOT, 'dist')
l('DIST', DIST)

console.time('blah.js')

const memoize = fn => {
  const m = new Map()
  const memoized = (...args) => {
    if (!m.has(args)) {
      m.set(args, fn(...args))
    }
    return m.get(args)
  }
  memoized.memo = m
  return memoized
}

const mkdirp = memoize((f) => mkdir('-p', f))
const exists = f => f && test('-e', f)
 // No https? too bad.
const href = url => (new URL(url, `https://${CNAME}`)).href
const written = new Map()
const write = (s, d) => {
  if (written.get(d)) {
    console.warn('caution: overwriting', d)
  }
  written.set(d, s)
  ShellString(s).to(d)
}

marked.setOptions({
  highlight: (code, lang) => {
    lang = lang || 'markup'
    const preloaded = ['markup', 'css', 'clike', 'javascript', 'js']
    if (!preloaded.includes(lang)) loadLanguages([ lang ])
    return prism.highlight(code, prism.languages[lang], lang)
  }
})

const CNAME = (exists('CNAME') && cat('CNAME').toString().trim()) || 'localhost'
const DEFAULT_LAYOUT = '_layout.html'
const components = {}
l('mkdir -p', DIST)
mkdirp(DIST)

const files =
  [ // untracked
    ...exec('git ls-files -o --exclude-standard', { silent: true }).toString().trim().split('\n')
    // tracked
  , ...exec('git ls-files', { silent: true }).toString().trim().split('\n')
  ]
  .filter(exists)

l('files', files)

const mds = []
const assets = []
const pages = []
for (const f of files) {
  if (f === 'blah.js') continue
  if (f.startsWith('dist/')) continue

  const base = basename(f)
  if (base[0] === '.') continue
  if (f.startsWith('_components/') && extname(f) === '.html') {
    component(f) // also processes these before .md
    continue
  }
  if (f.startsWith(' ') || base.startsWith(' ')) continue
  const ext = extname(f)
  if (ext === '.md') {
    mds.push(f)
    const { content, ...rest } = matter(cat(f).toString())
    const url = '/' + relative(ROOT, basename(f, '.md')).replace(/\/?index$/, '')
    pages.push({
      ...rest,
      url,
      href: href(url)
    })
    continue
  }
  assets.push(f)
}

l('mds', mds)
mds.forEach(md)

l('assets', assets)
assets.forEach(asset)

l('sitemap')
sitemap(pages)

function md(f) {
  const d = join(DIST, relative(ROOT, basename(f, '.md') + '.html'))
  l('md', f, '-->', d)

  const { content, data, excerpt } = matter(cat(f).toString())
  // TODO consolidate this with the pages logic.
  data.url = '/' + relative(ROOT, basename(f, '.md') /*+ '.html'*/).replace(/\/?index$/, '')
  data.href = href(data.url)
  const layoutPath = data.layout || DEFAULT_LAYOUT
  if (!exists(layoutPath)) return console.warn('no such layout', layoutPath)
  // l('content', content)
  // l('data', data)

  // frontmatter with a "redirect: /blah" link in it.
  if (data.redirect) {
    return redirect(f, d, data)
  }

  // This won't work right if I start using directories of posts
  if (data.title && f !== 'index.md') {
    data.ogImage = socialImage(data.href)
  } else if (data.title && f === 'index.md') {
    data.ogImage = data.href + 'images/dtrejo.jpg'
  }

  // TODO components need to go in AFTER markdown processing, so their HTML
  // doesn't get messed up :/ ??? Or is that a feature???
  const componentScope = { require, pages, ...data }
  const scope = { ...runComponents(componentScope), ...componentScope }
  // l('scope with components', scope)
  const markdown = template(content, scope)
  const contentHTML = marked(markdown)
  const page = layout(scope, contentHTML)
  write(page, d)
}

function layout(data, contentHTML) {
  const layoutPath = data.layout || DEFAULT_LAYOUT
  if (!exists(layoutPath)) return contentHTML

  const layoutHTML = cat(layoutPath).toString()
  const page = template(layoutHTML, { ...data, contentHTML, layoutPath })
  // l('layout', page)
  return page
}

function redirect(f, d, data) {
  // TODO: handle directories and / and index.html
  // TODO: handle offsite redirects
  l('redirect', f, data.redirect)

  const canonical = href(data.redirect)
  l('redirect canonical', canonical)

  const title = `Redirecting you to ${canonical}...`
  const contentHTML = title
  const head = `<link rel="canonical" href=${JSON.stringify(canonical)}>`
  const bodyEnd = `<script>window.location.href = ${JSON.stringify(canonical)}</script>`
  const html = layout({ title, head, bodyEnd }, contentHTML)
  l('redirect', f, d)
  l('redirect html', html)
  write(html, d)
}

function asset(f) {
  const relpath = relative(ROOT, f)
  const d = join(DIST, relpath)
  const { dir } = parse(d)
  l('asset', f, '-> dest', d)
  if (!changed(f, d)) return l('skip cp', f, d)

  if (f.includes('/')) {
    l('asset mkdir -p ', dir)
    mkdirp(dir)
  }

  l('cp', f, d)
  cp(f, d)
}

function sitemap(pages) {
  // l('sitemap pages[0]', JSON.stringify(pages[0], null, 2))
  write(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .filter(page => !page.data.redirect)
        .map(page =>
      `<url>
        <loc>${page.href}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page.data.changefreq || 'monthly'}</changefreq>
        <priority>${page.data.priority || '0.5'}</priority>
      </url>`
      ).join('')}
    </urlset>
  `, join(DIST, 'sitemap.xml'))
}

function changed(file, dest) {
  let dm
  try {
    dm = statSync(dest).mtime
  } catch (_) {
    return true // No dest file? need to generate it.
  }
  const fm = statSync(file).mtime
  return fm > dm
}

// TODO: this strategy means that template variables in someone's code blocks
// will mess up if they don't escape them :(
// Upside: it is simple.
function template(content, scope) {
  const escapedContent = content.replace(/`/g, '%60')
  const t = new Function(`return \`${escapedContent}\``).bind(scope)
  const markdown = t().replace(/%60/g, '`')
  // l('template', markdown)
  return markdown
}

// TODO refactor so that we only parse and compile a component right before it
// is used, and then it is cached.
function component(f) {
  l('component', f)
  const name = basename(f, '.html')
  // newlines mess up html in markdown, so we remove them.
  const content = cat(f).toString().replace(/\n/g, '').trim()
  if (content.includes('<script>')) {
    console.warn(`Make sure your <script> in ${name} uses semicolons!`)
  }
  if (components[name]) console.warn('overwriting component', name)
  l('component content', name, content)
  components[name] = function (scope) {
    return template(content, scope)
  }
}

function runComponents(scope) {
  const compiled = {}
  // add compiled to scope so components can use each other, if named well ;)
  for (const c of Object.keys(components)) {
    compiled[c] = components[c]({ compiled, ...scope })
  }
  return compiled
}

// Given canonical URL, use imgix motif to create a social image for embeds
// Based on https://motif.imgix.com/?d=eyJ1cmwiOiJodHRwOi8vcXouY29tLzYyNDQ5MC9leHBsb3JlLXRoZS13b3JsZC1saWtlLWEtZmlzaC13aXRoLXRoZS1iZXN0LXVuZGVyd2F0ZXItcGhvdG9zLW9mLXRoZS15ZWFyIiwidGl0bGUiOiIiLCJhY2NlbnRDb2xvciI6IiIsIm9nSW1hZ2VVUkwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNTk1MTgzNDU0OS00MTcyYjMxNmRlN2U%2FZml0PWNyb3AmaD02MzAmdz0xMjAwJnR4dD0lMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBCeSUyMERhdmlkJTIwVHJlam8lMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBkdHJlam8uY29tJnR4dGNscj1mZmYmdHh0c2l6ZT00MCZ0eHRmb250PUF2ZW5pciUyME5leHQlMjBEZW1pJTIwQm9sZCZ0eHRhbGlnbj1sZWZ0JTJDYm90dG9tJnR4dHBhZD0xNTAiLCJsb2dvVVJMIjoiaHR0cHM6Ly9kdHJlam8uY29tL2ltYWdlcy9kdHJlam8tcm91bmQucG5nIiwibG9nb0FsaWdubWVudCI6ImJvdHRvbSxsZWZ0IiwidGV4dFBvc2l0aW9uIjoidG9wIiwidGV4dEFsaWdubWVudCI6ImxlZnQiLCJmb250RmFtaWx5IjoiQXZlbmlyIE5leHQgRGVtaSxCb2xkIiwidGV4dENvbG9yIjoiZmZmZmZmIiwibG9nb1BhZGRpbmciOiI4MCIsImxvYWRpbmciOmZhbHNlLCJlcnJvcjQyMiI6ZmFsc2V9
// When you update your photo, make sure to create the rounded one too!
function socialImage(href) {
  const backgroundImage = 'https://images.unsplash.com/photo-1515951834549-4172b316de7e?fit=crop&h=630&w=1200&txt=%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20By%20David%20Trejo%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20DTrejo.com&txtclr=fff&txtsize=40&txtfont=Avenir%20Next%20Demi%20Bold&txtalign=left%2Cbottom&txtpad=150'
  const logo = 'https://dtrejo.com/images/dtrejo-round.png?b'
  const ogImage =
    `https://motif.imgix.com/i?url=${encodeURIComponent(href)}&image_url=${encodeURIComponent(backgroundImage)}&color=&logo_url=${encodeURIComponent(logo)}&logo_alignment=bottom%2Cleft&text_alignment=top%2Cleft&logo_padding=80&font_family=Avenir%20Next%20Demi%2CBold&text_color=dcd9d6`
  return ogImage
}

console.timeEnd('blah.js')
l('done')

// things we want to do
// √list documents
// √read in SSR template
// √read own mtime
// √read document max mtime from git and from fs
// √read frontmatter
// √render document's markdown to html
// √if just .html, copy it over to output dir, or serve it
// √ignores files starting with "_"
// √can make github friendly redirect html pages easily with rel=canonical
// √use frontmatter redirect: '/path' to redirect current page elsewhere
// √components work well enough
// √can make list of posts
// √can make sitemap, and sitemap.html
// √[no need] convert to use viper SSR.
// √reimplement CTA and author components
// √fix 404.html, use box2d.
// add asserts all over the place
// √set up CI to publish it

// far future, or never
// [No] can include vue component for site search?

// ## Philosophy of this site
// - Only one major CTA on every page (mid-article CTAs are also okay)
// - Offer alternate CTAs at the end of the article, e.g. sign up! or... email me; read on)
// - Only show one column of text. no sidebar.
// - Only add TOC at the top for (long) non-sales articles
// - Homepage has... mini squeeze copy; sign up cta; read on;
//   then footer, to deemphasize:
//     √ my projects etc like it is on my current site
//     √ then my articles

// ## Questions
// - √how to make a sitemap.xml? see their github issues. someone wrote one.
// - √how to do redirects? w/ router injecting urls?
// - √improve meta tags, see old homepage.

// ## TODOs
// - √new color theme? or just improve the orange accentcolor? and improve the gold
//   on the CTA form? saturation.
// - √check cta form works
// - √better headshot image?
// - √get my projects to load right: copy to public/; check em?
// - GA
// - link audit

// - turn workshop proposal(s) into a sales page
// - migrate engineeroverflow to here? w/ redirect.
// - migrate yelp rescues page to here? w/ redirect. fix yelp sales page
// - migrate 1st 3 chapters of book here, with half chapter teasers for the rest?
// - get samir's feedback and the maybe hide even more stuff / further focus it.

// - [ignore] use subdirectories to create prev/next? dunno. ignore it.
// - [ignore] prev/next links based on the homepage categories? too much work.
// - [ignore] show 3 "next" related articles under each article?
// - [ignore] give the visitor a quiz and only show them what they're interested in?
// - [ignore] image to color scheme library?

// if (process.env.argv.includes('-t')) {
//   const add = memoize((a, b) => {
//     return a + b
//   })
//   console.assert(add(1, 2) === 3)
//   console.assert(add(1, 2) === 3)
//   console.assert(add(1, 3) === 4)

//   // TODO assert redirects were made properly
// }