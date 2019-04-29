const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*',(req,res)=>{
    console.log(req)
    const app = new Vue({
        data() {
            return {
                url:req.url
            }
        },
        template:`<div>访问的url是{{url}}</div>`
    })
    renderer.renderToString(app, (err, html) => {
        if (err) {
          res.status(500).end('Internal Server Error')
          return
        }
        res.end(`
          <!DOCTYPE html>
          <html lang="en">
            <head><title>Hello</title>
            <meta charset="UTF-8">
            </head>
            <body>${html}</body>
          </html>
        `)
      })
})

server.listen(3333)