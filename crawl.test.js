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

const htmlString = `<html><body><a href=${urlTests[1]}><a></body></html>`
const unnormalUrl = 'https://blog.boot.dev/path'
const baseUrl = 'blog.boot.dev'


test('returns urls from an html string', () => {
  expect(getURLsFromHTML(htmlString, baseUrl).toBe(unnormalUrl))
})