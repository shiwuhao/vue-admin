
<template>
    <!--<el-row :gutter="0" id="sidenav">-->
        <el-col :md="6" :lg="4" v-show="leftnav">
            <div class="grid-content bg-purple">
                <ul class="sidenav">
                    <li>
                        <el-row :gutter="0">
                            <el-col :xs="20" :sm="20" :md="20" :lg="20">
                                <span class="el-icon-message icon"></span>
                                <span>表格和表单</span>
                            </el-col>
                            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                                <span class="el-icon-arrow-down"></span>
                            </el-col>
                        </el-row>
                        <ul class="childnav">
                            <router-link tag="li" to="/table/fo" active-class="current"><span></span>表格</router-link>
                            <router-link tag="li" to="/table/fo2" active-class="current"><span></span>表单</router-link>
                            <router-link tag="li" to="/table/fo3" active-class="current"><span></span>可增减表格</router-link>
                        </ul>
                    </li>
                    <li>
                        <el-row>
                            <el-col :xs="20" :sm="20" :md="20" :lg="20">
                                <span class="el-icon-message icon"></span>
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
                                <span class="el-icon-message icon"></span>
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
    <!--</el-row>-->
</template>
<style>
    .sidenav .el-row{padding:8px 0;}
    .childnav{background: #eee;line-height: 30px;}
    .childnav span{display: inline-block;width: 20px;}
    .sidenav li{cursor: pointer;}
    .sidenav li:hover{background: #d3dce6;}
    .sidenav .current{color: #0074D9;}
    .views{margin:30px 40px;}
    .sidenav .icon{margin:0  10px;}
    .childnav{padding:4px 0;}
    .childnav span{margin-left:22px;}
    .childnav li{line-height: 32px;font-size: 14px;}
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