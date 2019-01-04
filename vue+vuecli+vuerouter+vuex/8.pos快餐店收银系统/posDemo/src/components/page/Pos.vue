<template>
    <div style="height:100%;">
        <el-row style="height:100%">
            <!-- left -->
            <el-col :span="8" style="border-right:1px solid #e0d7d7;">
                <el-tabs>
                    <el-tab-pane label="点餐">
                         <el-table :data="tableData" border style="width: 100%">
                            <el-table-column prop="goodsName" label="商品" width="100"></el-table-column>
                            <el-table-column prop="count" label="数量" width="80"></el-table-column>
                            <el-table-column prop="price" label="金额">
                            </el-table-column>
                            <el-table-column fixed="right" label="操作" width="100">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="deleteOrderList(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div>
                            <span>总数量：{{totalCount}}</span>
                            <span>总价格：{{totalPrice}}</span>
                        </div>
                        <div style="margin-top:10px">
                            <el-button type="warning" size="small" >挂单</el-button>
                            <el-button type="danger" size="small" @click="deleteAll">删除</el-button>
                            <el-button type="success" size="small">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                    挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                    外卖
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <!-- right -->
            <el-col :span="16">
                <el-breadcrumb separator="/" class="font15">
                    <el-breadcrumb-item>点餐</el-breadcrumb-item>
                    <el-breadcrumb-item>常用商品</el-breadcrumb-item>
                </el-breadcrumb>
                <!-- 常用商品 -->
                <ul class="oftenGoods goodsListUl">
                    <li v-for="good in oftenGoods" @click="addOrderList(good)">
                        <span>{{good["goodsName"]}}</span>
                        <span>￥{{good["price"]}}</span>
                    </li>
                </ul>
                <!-- 分类商品 -->
                <el-tabs>
                    <el-tab-pane label="汉堡">
                        <ul class="goodsListUl">
                            <li v-for="good in type0Goods" @click="addOrderList(good)">
                                <span>{{good["goodsName"]}}</span>
                                <span>￥{{good["price"]}}</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="小吃">
                        <ul class="goodsListUl">
                            <li v-for="good in type1Goods" @click="addOrderList(good)">
                                <span>{{good["goodsName"]}}</span>
                                <span>￥{{good["price"]}}</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="饮料">
                        <ul class="goodsListUl">
                            <li v-for="good in type2Goods" @click="addOrderList(good)">
                                <span>{{good["goodsName"]}}</span>
                                <span>￥{{good["price"]}}</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="套餐">
                        <ul class="goodsListUl">
                            <li v-for="good in type3Goods" @click="addOrderList(good)">
                                <span>{{good["goodsName"]}}</span>
                                <span>￥{{good["price"]}}</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Pos',
    data:function(){
        return{
            tableData:[],
            oftenGoods:[],
            type0Goods:[],
            type1Goods:[],
            type2Goods:[],
            type3Goods:[],
            totalCount:0,
            totalPrice:0,
        }
    },
    methods:{
        getTotalInfo:function(){
            let totalCount=0;
            let totalPrice=0;
            for(let i=0;i<this.tableData.length;i++){
                console.log(this.tableData[i]['count'])
                totalCount+=this.tableData[i]['count'];
                totalPrice+=this.tableData[i]['count']*this.tableData[i]['price'];
            }
            this.totalCount=totalCount;
            this.totalPrice=totalPrice;
        },
        addOrderList:function(item){
            console.log(item)
            this.totalCount=0;
            this.totalPrice=0;
            var hasBool=false;
            for(let i=0;i<this.tableData.length;i++){
                if(item['goodsName']==this.tableData[i]['goodsName']){
                    hasBool=true;
                }
            }
            if(hasBool==false){
                item['count']=1;
                this.tableData.push(item)
            }else{
               var newArr=[];
               for(let i=0;i<this.tableData.length;i++){
                   newArr[i]=this.tableData[i]
                    if(item['goodsName']==this.tableData[i]['goodsName']){
                        newArr[i]['count']++;
                    }
                } 
                this.tableData=newArr;
            }
            this.getTotalInfo();
        },
        deleteOrderList:function(item){
            console.log(item)
            let newArr=[]
            for(let i=0;i<this.tableData.length;i++){
                if(this.tableData[i]['goodsName']==item['goodsName']){
                    this.tableData[i]['count']--;
                    if(this.tableData[i]['count']==0){

                    }else{
                        newArr[i]=this.tableData[i];
                    }
                }else{
                    newArr[i]=this.tableData[i];
                }
            }
            this.tableData=newArr;
            this.getTotalInfo();
        },
        deleteAll:function(){
            this.tableData=[];
            this.totalCount=this.totalPrice=0;
        }
    },
    created:function(){
        // 获取常用商品
        axios.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods")
        .then(response=>{
            console.log('常用货物数据：',response);
            this.oftenGoods=response.data;
        }).catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
        // 获取分类商品
        axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
        .then(response=>{
            console.log('分类货物数据：',response);
            this.type0Goods=response.data[0];
            this.type1Goods=response.data[1];
            this.type2Goods=response.data[2];
            this.type3Goods=response.data[3];
        }).catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
    }
}
</script>
<style scoped>
.el-col{
    padding: 10px;height:100%;
}
.font15{
    font-size: 15px;
    padding-bottom:15px; 
    border-bottom: 1px solid #e4e4e4;
}
.goodsListUl{margin: 10px 0;text-align: left}
.goodsListUl li{
    cursor: pointer;
    display: inline-block;
    padding: 5px;
    border: 1px solid #e4e4e4;
    margin: 5px;
    text-align: center;
    width: 120px;
    font-size: 15px
}
.goodsListUl li:hover{
    color: #fff;
    background: #1D8CE0;
}
</style>

