module.exports = articles

if (process.argv.includes('-v')) function l() { console.log.apply(console, arguments)}
else function l() {}

function articles(pages, tag, not) {
  // l('articles', pages, tag, not)
  return `<ol>${
    pages.sort((a, b) =>
      -1 * (a.data.date || '').localeCompare(b.data.date)
    )
    .filter(post =>
      !tag ||
      tags(post).includes(tag) && !intersects(tags(post), parseTags(not)))
    .map(post => `<li><a href="${post.url}">${post.data.title}</a></li>`)
    .join('')
  }</ol>
`
}

{/* <!-- <div class="title">{{ post.title }}</div> -->
<!-- <div class="date">{{ new Date(post.frontmatter.date).toLocaleDateString() }}</div> -->
<!-- <div class="description">{{ post.frontmatter.description }}</div> --> */}
// <!-- TODO: include excerpt instead? -->
// <!-- it is okay to put this in an <article> if you include excerpt etc -->
function tags(post) {
  return parseTags(post.data.tags)
}

function intersects(a, b) {
  // console.log('intersects', a, '|', b, '===', a.some(el => b.includes(el)))
  return a.some(el => b.includes(el))
}

function parseTags (raw) {
  // handle "abc" and "abc, def"
  if (typeof raw === 'string') {
    return raw.split(',').map(s => s.trim())
  }
  return raw || []
}
