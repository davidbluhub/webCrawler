const { JSDOM } = require('jsdom')

function normalizeURL(url) {
  let normalizedUrl
  
  if (url.startsWith('https://') || url.startsWith('http://')){
    const myUrl = new URL(url)
    normalizedUrl = `${myUrl.hostname}${myUrl.pathname}`
  } else {
    normalizedUrl = url
  }

  if (baseUrl.endsWith('/')) {
    normalizedUrl = baseUrl.slice(0, normalizedUrl.length - 1)
  }
  return normalizedUrl
}

function getURLsFromHTML(htmlString, baseUrl) {
  const urlArr = []
  const dom = new JSDOM(htmlString)
  for (const element of dom.window.document.querySelectorAll('a')) {
    if (element.href) {
      urlArr.push(element.href)
    }
  }
  return urlArr
}

module.exports = {
  normalizeURL,
  getURLsFromHTML
}