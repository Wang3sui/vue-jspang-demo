const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyparser())

const home = new Router()
home.get('/',(ctx,next)=>{
     // 主页post请求
     let html=`<div>
     post<br/>
     <form method="POST" action="/home/sayhello">
        <p>userName</p>
        <input name="userName" /> <br/>
        <p>age</p>
        <input name="age" /> <br/>
        <p>webSite</p>
        <input name='webSite' /><br/>
        <button type="submit">submit</button>
     </form>
     </div>`;
     ctx.body=html;
})
.post('/sayhello',(ctx,next)=>{
    let postData = ctx.request.body;
    ctx.body='post数据传递成功：'+JSON.stringify(postData);
})
.get('/getMethod',(ctx,next)=>{
    let request=ctx.request;
    let req_query = request.query; 
    ctx.body=req_query;
})

const router = new Router()
router.use('/home',home.routes(),home.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('success')
})