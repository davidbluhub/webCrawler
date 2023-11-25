function normalizeURL(url) {
  let baseUrl
  if (url.startsWith('https://') || url.startsWith('http://')){
    const myUrl = new URL(url)
    baseUrl = `${myUrl.hostname}${myUrl.pathname}`
  } else {
    baseUrl = url
  }

  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, baseUrl.length - 1)
  }
  return baseUrl
}

function getURLsFromHTML(htmlString) {
  return
}

module.exports = {
  normalizeURL,
  getURLsFromHTML
}