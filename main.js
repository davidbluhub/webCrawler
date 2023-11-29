const { normalizeURL, getURLsFromHTML } = require('./crawl.js')

const htmlString = "<html><body><a href='https://blog.boot.dev/path'><a></body></html>"

console.log(getURLsFromHTML(htmlString, 'something'))
console.log('Hello, World!')