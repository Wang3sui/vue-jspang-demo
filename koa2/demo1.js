async function hello(){
    return 'hello';
}

function getSomething(){
    return 'getSomething'
}

async function test(){
    let re1 =await hello();
    let re2 =await getSomething();
    console.log(re1,'  ',re2)
}

test()