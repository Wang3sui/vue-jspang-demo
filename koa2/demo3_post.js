const Koa = require('koa');
const app = new Koa()

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
        console.log(ctx)
        // post请求
        let postData = await parsePostData(ctx)
        let postJson = parseQueryStr(postData)
        ctx.body=postJson;

    }else{
        ctx.body='<hi>404</h1>'
    }
})

// post数据转化字符串
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            ctx.req.on('data',(data)=>{
                postdata+=data
            })

            ctx.req.addListener('end',function(){
                resolve(postdata)
            })
        }catch(error){
            reject(error)
        }
    })
}

// 把字符串解析成json对象
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList=queryStr.split("&")
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    } 
    return queryData
}

app.listen(3000,()=>{
    console.log("success")
});