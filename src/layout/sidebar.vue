
<template>
    <!--<el-row :gutter="0" id="sidenav">-->
        <el-col :md="6" :lg="4">
            <div class="grid-content bg-purple">
                <ul class="sidenav">
                    <li v-for="(item,index) in navlist">
                        <el-row :gutter="0">
                            <el-col :xs="20" :sm="20" :md="20" :lg="20">
                                <span class="icon" :class="item.icon"></span>
                                <span>{{item.nav}}</span>
                            </el-col>
                            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                                <span :class="[item.arrow?'el-icon-arrow-up':'el-icon-arrow-down']" @click="isshow(index)"></span>
                            </el-col>
                        </el-row>
                        <ul class="childnav" v-show="item.arrow">
                            <router-link :to="'/'+item.parmas1+'/'+child.parmas" tag="li" v-for="child in item.child" active-class="current">
                                <span></span>{{child.childnav}}
                            </router-link>
                        </ul>
                    </li>
                </ul>
            </div>
        </el-col>
    <!--</el-row>-->
</template>
<style scoped>
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
    import axios from 'axios'
    export default{
        data(){
           return  {
               navlist:[
//                   {
//                       nav:'表单和表格',
//                       parmas1:'table',
//                       icon:'el-icon-message',
//                       arrow:false,
//                       child:[
//                           {
//                               childnav:'表格',
//                               parmas:'tables'
//                           },
//                           {
//                               childnav:'表单',
//                               parmas:'form'
//                           },
//                           {
//                               childnav:'可增减表格',
//                               parmas:'selftable'
//                           }
//                       ]
//                   },
//                   {
//                       nav:'基本组件',
//                       parmas1:'theme',
//                       icon:'el-icon-message',
//                       arrow:false,
//                       child:[
//                           {
//                               childnav:'富文本编辑器',
//                               parmas:'editor'
//                           },
//                           {
//                               childnav:'列表拖拽',
//                               parmas:'drag'
//                           },
//                           {
//                               childnav:'分页',
//                               parmas:'pages'
//                           },
//                           {
//                               childnav:'图片上传',
//                               parmas:'picupload'
//                           },
//                           {
//                               childnav:'弹框',
//                               parmas:'popin'
//                           }
//                       ]
//                   },
//                   {
//                       nav:'图表',
//                       parmas1:'chart',
//                       icon:'el-icon-message',
//                       arrow:false,
//                       child:[
//                           {
//                               childnav:'折线图',
//                               parmas:'line'
//                           },
//                           {
//                               childnav:'柱图',
//                               parmas:'bar'
//                           }
//                       ]
//                   }
               ]
           }
        },
        methods:{
            isshow(index){
                this.navlist.forEach(function(e){
                    e.arrow=false;
                })
                this.navlist[index].arrow=true;
            },
            getData(){
                axios.get('../data/sidebar')
                        .then(function(res){
                            console.log(res)
                        })
            }
        },
        mounted(){
            this.getData()
        }
    }
</script>