
<template>
    <el-row :gutter="0" class="topbar clearfix">
        <!--<el-col :xs="8" :sm="6" :md="8" :lg="4" v-show="leftnav" id="leftnav"><div class="grid-content "><h1>xxrunning</h1></div></el-col>-->
        <!--<el-col :xs="16" :sm="18" :md="16" :lg="20">-->
            <!--<el-row>-->
                <!--<el-col :xs="16" :sm="10" :md="16" :lg="18">-->
                    <!--<div class="grid-content ">-->
                        <!--<div class="el-icon-d-arrow-left flexbtn" @click="leftnav=!leftnav" v-show="leftnav"></div>-->
                        <!--<div class="el-icon-d-arrow-right flexbtn" @click="leftnav=!leftnav" v-show="!leftnav"></div>-->
                    <!--</div>-->
                <!--</el-col>-->
                <!--<el-col :xs="8" :sm="14" :md="8" :lg="6">-->
                    <!--<div class="grid-content user">-->
                        <!--<div class="username clearfix" @click="userlist=!userlist"><span>jeeny</span><img src="" alt="" width="40" height="40"></div>-->
                        <!--<ul v-show="userlist">-->
                            <!--<li>首页</li>-->
                            <!--<li>设置</li>-->
                            <!--<li>退出</li>-->
                        <!--</ul>-->
                    <!--</div>-->
                <!--</el-col>-->
            <!--</el-row>-->
        <!--</el-col>-->
        <h1 class="fl">xxrunning</h1>
        <div class="el-icon-d-arrow-left flexbtn fl"></div>
        <div class="el-icon-menu flexbtn fr"></div>
        <div class="grid-content user fr">
            <div class="username clearfix" @click="userlist=!userlist"><span>jeeny</span><img src="" alt="" width="40" height="40"></div>
            <ul v-show="userlist">
                <li>首页</li>
                <li>设置</li>
                <li>退出</li>
            </ul>
        </div>
    </el-row>
</template>
<style>
    .topbar{padding:5px 10px;background: #539ff2;}
    .user{position: relative;}
    .user ul{position: absolute;top:45px;left:0;z-index:10;background: #fff;padding:6px 20px;border:1px solid #dfdfdf;border-radius: 3px;}
    .user li{line-height: 30px;cursor: pointer;}
    .user li:hover{color: #0074D9;}
    .username span{float:left;line-height: 40px;margin-right: 6px;}
    .username img{float: left;}
    .views{margin:30px 40px;}
    .flexbtn{line-height: 40px;margin-left:40px;cursor: pointer;}
    @media (min-width:300px) and (max-width:768px){
        .flexbtn{margin-left:20px;}
        .topbar .el-icon-d-arrow-left{display: none;}
        #sidenav{width: 160px;position: fixed;top:50px;left:-160px;z-index:5;}
        .el-pagination{white-space: normal;}
    }
</style>
<script>
    export default{
        data(){
            return {
                userlist:false,
                leftnav:true
            }
        }
    }
</script>