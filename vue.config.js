module.exports = {
    lintOnSave: false
    , devServer: {
        https: true
        , hotOnly: false
        , proxy: 'https://seersco-front-end.here/',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
          }
    , }
, }