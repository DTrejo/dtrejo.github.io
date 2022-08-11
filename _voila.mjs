import render from 'preact-render-to-string'
import parse, { attributesToProps } from 'html-react-parser'
import * as preact from 'preact'
import { readFileSync } from 'fs'
import { marked } from 'marked'

function parsejsx(jsx, components = {}) {
  const options = {
    library: preact,
    htmlparser2: {
      lowerCaseTags: false,
    },
    replace(node) {
      // TODO: how do we handle props, children, etc?
      if (components[node?.name]) {
        const props = attributesToProps(node.attribs);
        return components[node?.name](props)
      }
      return node
    },
  }
  return parse(jsx, options)
}

if (import.meta.url.endsWith(process.argv[1])) {
  test1()
  test2()
}
// jsx parsing
function test1() {
  const jsx = readFileSync('./_components/test.jsx', { encoding: 'utf8' })
  const parsed = parsejsx(jsx)
  const html = render(parsed, {}, { pretty: true })
  console.log({ html })
  console.assert(html.length)
  console.assert(html.includes('<h1>hi</h1>'))
}
// marked md and jsx
function test2() {
  const jsx = readFileSync('./_components/test.jsx', { encoding: 'utf8' })
  const parsedjsx = parsejsx(jsx)
  // TODO act like a real component, and use the props/children etc.
  const Test = (props) => parsedjsx

  const mdjsx = readFileSync('./_md-jsx-test.md', { encoding: 'utf8' })
  const renderer = {
    html(html) {
      const parsed = parsejsx(html, { Test })
      return render(parsed, {}, { pretty: true })
    },
  }
  marked.use({ renderer })
  const html = marked(mdjsx)
  console.log({ html })
  console.assert(html.includes('md jsx text</h1>'))
  console.assert(html.includes('<h1>hi</h1>'))
  console.log('done')
}

/* 
idea:
- look for html inside of markdown
- parse it as preact with https://github.com/remarkablemark/html-react-parser
- load layout, components through that preact instead.
- server render the react to html strings, with prettify. 
  https://preactjs.com/guide/v10/server-side-rendering

What I want:
  - read files when program runs
  - no compile step
  - markdown with frontmatter and embedded html/jsx
  - components from components folder
  - layout

Use this? https://github.com/developit/htm
https://gist.github.com/developit/699c8d8f180a1e4eed58167f9c6711be
*/
