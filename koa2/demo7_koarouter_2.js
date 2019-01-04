const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

// home路由
const home = new Router()
home.get('/main',(ctx,next)=>{
    ctx.body="home main"
})
.get('/todo',(ctx,next)=>{
    ctx.body='home todo'
})

// page路由
const page = new Router()
page.get('/main',(ctx,next)=>{
    ctx.body="page main"
})
.get('/todo',(ctx,next)=>{
    ctx.body='page todo'
})


// 父路由
const router = new Router()
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('success')
})