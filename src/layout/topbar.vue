
<template>
    <el-row :gutter="0" class="topbar clearfix">
        <h1 class="fl">running</h1>
        <!--<div class="el-icon-d-arrow-left flexbtn fl" v-show="leftnav" @click="leftnav=!leftnav"></div>-->
        <!--<div class="el-icon-d-arrow-right flexbtn fl" v-show="!leftnav" @click="leftnav=!leftnav"></div>-->
        <div class="el-icon-menu flexbtn fr" @click="toshownav()"></div>
        <div class="grid-content user fr">
            <div class="username clearfix" @click="userlist=!userlist"><span>jeeny</span><img src="assets/pic.jpg" alt="" width="40" height="40"></div>
            <ul v-show="userlist">
                <!--<li>首页</li>-->
                <!--<li>退出</li>-->
                <router-link to="/" tag="li">首页</router-link>
                <router-link to="/login" tag="li">退出</router-link>
            </ul>
        </div>
    </el-row>
</template>
<style scoped>
    .topbar{padding:5px 15px;background: #0074e0;}
    .user{position: relative;}
    .user ul{position: absolute;top:45px;left:0;z-index:10;background: #fff;padding:6px 20px;border:1px solid #dfdfdf;border-radius: 3px;}
    .user li{line-height: 30px;cursor: pointer;}
    .user li:hover{color: #0074D9;}
    .username span{float:left;line-height: 40px;margin-right: 6px;color: #fff;font-weight: bold;}
    .username img{float: left;}
    .views{margin:30px 40px;}
    .flexbtn{line-height: 40px;margin-left:40px;cursor: pointer;}
    @media (min-width:300px) and (max-width:768px){
        .flexbtn{margin-left:20px;}
        .topbar .el-icon-d-arrow-left{display: none;}
        #sidenav{width: 160px;position: fixed;top:50px;left:-160px;z-index:5;}
        .el-pagination{white-space: normal;}
    }
    @media (min-width:768px) {
        .topbar .el-icon-menu{display: none;}
    }
</style>
<script>
    export default{
        data(){
            return {
                userlist:false,
                toseenav:true
            }
        },
        methods:{
            toshownav(){
                if(this.toseenav){
                    this.toseenav=false;
                }else{
                    this.toseenav=true;
                }
            }
        }
    }
</script>