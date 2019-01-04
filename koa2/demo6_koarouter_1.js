const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/',(ctx,next)=>{
    ctx.body="index"
})
.get('/setting',(ctx,next)=>{
    ctx.body="setting"
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log("success");
})