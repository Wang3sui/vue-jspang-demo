<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-hanbao"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-huiyuanqia"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-shouji"></i>
                <div>手机</div>
            </li>
            <li>
                <i class="icon iconfont icon-gongnengjianyi"></i>
                <div>设置</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"LeftNav"
}
</script>
<style scoped>
.left-nav{
    background: #1D8CE0;
}
.left-nav ul li{
    color: white;
    padding: 10px;
    border-bottom:1px solid #b3aeae; 
    cursor: pointer;
}
.left-nav ul li i{font-size: 20px}
</style>

