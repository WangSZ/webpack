
let config = {
  debug: {
    http: false // http request log
  },
  url: {
    api: '/'
  }
}
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing') {
  config.debug.http = true
}
config.url.api = process.env.URL_API
global.config = config

export default config
