const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const router = new Router({
    prefix:'/cookie'
})
router.get('/setCookie',(ctx,next)=>{
    ctx.cookies.set(
        'name','wang',
        {
            domain:'127.0.0.1', //cookie所在的域名
            path:'/cookie',     //cookie所在的路径
            maxAge:1000*60*60*24,//有效时长
            expires:new Date('2019-01-06'),//失效时间
            httpOnly:false,//是否只能http请求获得
            overwrite:false//是否允许重写
        }
    )
    ctx.body="cookie 已存";
})
.get('/getCookie',(ctx,next)=>{
    let name = ctx.cookies.get('name')
    ctx.body=`<h1>getCookie 页面->:${name}</h1>`
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('success');
})