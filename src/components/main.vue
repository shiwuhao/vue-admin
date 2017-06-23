
<template>
    <div>
        <el-row :gutter="0" class="topbar">
            <el-col :xs="8" :sm="6" :md="8" :lg="4"><div class="grid-content "><h1>xxrunning</h1></div></el-col>
            <el-col :xs="16" :sm="18" :md="16" :lg="20">
                <el-row>
                    <el-col :xs="16" :sm="10" :md="16" :lg="18">
                        <div class="grid-content ">
                            <div class="el-icon-d-arrow-left flexbtn"></div>
                        </div>
                    </el-col>
                    <el-col :xs="8" :sm="14" :md="8" :lg="6">
                        <div class="grid-content user">
                            <div class="username clearfix"><span>jeeny</span><img src="" alt="" width="40" height="40"></div>
                            <ul>
                                <li>首页</li>
                                <li>设置</li>
                                <li>退出</li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="0">
            <el-col :xs="8" :sm="6" :md="8" :lg="4">
                <div class="grid-content bg-purple">
                    <ul class="sidenav">
                        <li>
                            <el-row :gutter="0">
                                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                                    <span class="el-icon-message"></span>
                                    <span>表格和表单</span>
                                </el-col>
                                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                                    <span class="el-icon-arrow-down"></span>
                                </el-col>
                            </el-row>
                            <!--<ul class="childnav">-->
                            <!--<li>子导航</li>-->
                            <!--<li>子导航2</li>-->
                            <!--<li>子导航3</li>-->
                            <!--</ul>-->
                            <ul class="childnav">
                                <router-link tag="li" to="/table/fo" active-class="current"><span></span>表格</router-link>
                                <router-link tag="li" to="/table/fo2" active-class="current"><span></span>表单</router-link>
                                <router-link tag="li" to="/table/fo3" active-class="current"><span></span>可增减表格</router-link>
                            </ul>
                        </li>
                        <li>
                            <el-row>
                                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                                    <span class="el-icon-message"></span>
                                    <span>基本组件</span>
                                </el-col>
                                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                                    <span class="el-icon-arrow-down"></span>
                                </el-col>
                            </el-row>
                            <ul class="childnav">
                                <router-link tag="li" to="/theme/fo" active-class="current"><span></span>富文本编辑器</router-link>
                                <router-link tag="li" to="/theme/fo3" active-class="current"><span></span>列表拖拽</router-link>
                                <router-link tag="li" to="/theme/fo4" active-class="current"><span></span>分页</router-link>
                                <router-link tag="li" to="/theme/fo5" active-class="current"><span></span>图片上传</router-link>
                                <router-link tag="li" to="/theme/fo6" active-class="current"><span></span>弹框</router-link>
                            </ul>
                        </li>
                        <li>
                            <el-row>
                                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                                    <span class="el-icon-message"></span>
                                    <span>图表</span>
                                </el-col>
                                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                                    <span class="el-icon-arrow-down"></span>
                                </el-col>
                            </el-row>
                            <ul class="childnav">
                                <router-link tag="li" to="/chart/line" active-class="current"><span></span>折线统计图</router-link>
                                <router-link tag="li" to="/chart/bar" active-class="current"><span></span>柱统计图</router-link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :xs="16" :sm="18" :md="16" :lg="20">
                <div class="grid-content views">
                    <router-view name="views"></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .sidenav .el-row{padding:6px 0;}
    .childnav{background: #eee;line-height: 30px;}
    .childnav span{display: inline-block;width: 20px;}
    .sidenav li{cursor: pointer;}
    .sidenav li:hover{background: #d3dce6;}
    .sidenav .current{color: #0074D9;}
    .topbar{padding:5px 0;background: #539ff2;}
    .user{position: relative;}
    .user ul{position: absolute;top:45px;left:0;z-index:10;background: #fff;padding:6px 20px;border:1px solid #dfdfdf;border-radius: 3px;}
    .user li{line-height: 30px;cursor: pointer;}
    .user li:hover{color: #0074D9;}
    .username span{float:left;line-height: 40px;margin-right: 6px;}
    .username img{float: left;}
    .views{margin:30px 40px;}
    .flexbtn{line-height: 40px;margin-left:40px;cursor: pointer;}
</style>