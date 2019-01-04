const Koa = require("koa")
const app = new Koa()

app.use( async(ctx)=>{
    ctx.body="helloworld"
})

app.listen(3000)

console.log("success")