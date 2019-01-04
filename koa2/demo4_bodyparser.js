const Koa = require('koa');
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(async(ctx)=>{
    if(ctx.url==='/' && ctx.method === 'GET'){
        // 主页get请求
        let html=`<div>
        <form method="POST"  action="/">
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
    }else if(ctx.method==='POST' &&ctx.url==='/'){
        let postJson=ctx.request.body;
        ctx.body=postJson;

    }else{
        ctx.body='<hi>404</h1>'
    }
})

app.listen(3000,()=>{
    console.log("success")
});