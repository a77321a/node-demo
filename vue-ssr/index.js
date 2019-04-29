/**
 * 实例化vue
 */

 const Vue = require('vue')

 const app = new Vue({
     template:'<div>hello word</div>'
 })

 const renderer = require('vue-server-renderer').createRenderer()

// renderer.renderToString(app,(err,html)=>{
//     if(err) console.log(err)
//     console.log(html)
// })
renderer.renderToString(app).then((html)=>{
    console.log(html)
}).catch(err=>{

})
