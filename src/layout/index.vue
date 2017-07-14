
<template>
    <div>
        <div class="userindex clearfix">
            <div class="userpic fl">
                <img src="../assets/pic.jpg" width="150" height="150"/>
            </div>
            <dl class="statistics fl">
                <dt>超级管理员-十五号</dt>
                <dd><span>{{animate(444)}}</span><i class="icon el-icon-message"></i></dd>
                <dd><countTo :startVal='0' :endVal='item.form' :duration='3600'>111</countTo><i class="icon el-icon-message"></i></dd>
                <dd><span>1011</span><i class="icon el-icon-message"></i></dd>
                <dd><span>1011</span><i class="icon el-icon-message"></i></dd>
            </dl>
        </div>
        <ul class="navbtn clearfix">
            <router-link to="/table/tables" tag="li" class="green">表单和表格</router-link>

            <router-link to="/theme/editor" tag="li" class="blue">基本组件</router-link>
            <router-link to="/chart/line" tag="li" class="purple">图表</router-link>
        </ul>
    </div>
</template>
<style scoped>
    .userpic{border-radius: 50%;overflow: hidden;margin-right: 30px;}
    .userpic img{border-radius: 50%;}
    .statistics dt{font-size: 30px;font-weight: bold;line-height:50px;}
    .statistics dd{line-height: 30px;}
    .statistics span{font-size: 20px;margin-right: 20px;}
    .statistics i{color: #999;}
    .navbtn{margin:40px 0;}
    .navbtn li{float:left;margin:0 16px;padding:10px 24px;border-radius: 5px;cursor: pointer;color: #fff;}
</style>
<script>

    export default{
        data(){
            return {
                item:{
                    table:123,
                    form:4111,
                    chart:555
                }
            }
        },
        methods:{
            animate(num){
               let n=0
               let timer=setInterval(function(){
                    n++;
                   if(n==num){
                       clearInterval(timer)
                   }
                },600);

            }
        }
    }
</script>
