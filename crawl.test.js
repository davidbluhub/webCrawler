const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

const baseUrl = 'blog.boot.dev/path'

const tests = [
  'blog.boot.dev/path',
  'https://blog.boot.dev/path',
  'http://blog.boot.dev/path',
  'http://blog.boot.dev/path/',
  'https://blog.boot.dev/path/'
]

for (const testItem of tests) {
  test('strips https://', () => {
    expect(normalizeURL(testItem)).toBe(baseUrl)
  })
}