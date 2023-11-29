const { test, expect } = require('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require('./crawl.js')

const normalizedUrl = 'blog.boot.dev/path'

const urlTests = [
  'blog.boot.dev/path',
  'https://blog.boot.dev/path',
  'http://blog.boot.dev/path',
  'http://blog.boot.dev/path/',
  'https://blog.boot.dev/path/'
]

for (const testItem of urlTests) {
  test('strips urls to base url', () => {
    expect(normalizeURL(testItem)).toBe(normalizedUrl)
  })
}

htmlTests = [
  [
    '<html><body><a href="/path"><a></body></html>', 
    'https://blog.boot.dev', 
    ['https://blog.boot.dev/path']
  ],
  [
    '<html><body><a href="https://blog.boot.dev/path"><a></body></html>', 
    'https://blog.boot.dev', 
    ['https://blog.boot.dev/path']
  ],
  [
    '<html><body><a href="https://blog.boot.dev/path"><a><a href="/path2"><a></body></html>', 
    'https://blog.boot.dev', 
    ['https://blog.boot.dev/path', 'https://blog.boot.dev/path2']
  ],
  [
    '<html><body><a href="/path"><a><a href="/path2"><a></body></html>', 
    'https://blog.boot.dev', 
    ['https://blog.boot.dev/path', 'https://blog.boot.dev/path2']
  ],
  [
    '<html><body><a href="https://blog.boot.dev/path"><a><div></div><a href="/path2"><a><a href="https://github.com/"></a></body></html>', 
    'https://blog.boot.dev', 
    ['https://blog.boot.dev/path', 'https://blog.boot.dev/path2', 'https://github.com/']
  ],
]

const htmlString = '<html><body><a href="/path"><a></body></html>'
const unnormalUrlArr = ['https://blog.boot.dev/path']
const baseUrl = 'https://blog.boot.dev'

for (const testArr of htmlTests) {
  test('returns urls from an html string', () => {
    expect(getURLsFromHTML(testArr[0], testArr[1])).toStrictEqual(testArr[2])
  })
}