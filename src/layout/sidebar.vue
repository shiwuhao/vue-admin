
<template>
    <!--<el-row :gutter="0" id="sidenav">-->
        <el-col :md="6" :lg="4">
                <ul class="sidenav">
                    <li v-for="(item,index) in navlist">
                        <el-row :gutter="0" :class="item.cur?'cur':''"  @click.native="isshow(index)">
                            <el-col :xs="20" :sm="20" :md="20" :lg="20">
                                <span class="icon" :class="item.icon"></span>
                                <span>{{item.nav}}</span>
                            </el-col>
                            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                                <span :class="[item.arrow?'el-icon-arrow-up':'el-icon-arrow-down']"></span>
                            </el-col>
                        </el-row>
                        <transition name="fade">
                            <ul class="childnav" v-show="item.arrow">
                                <router-link :to="'/'+item.parmas1+'/'+child.parmas" tag="li" v-for="child in item.child" active-class="current" :key="child.id">
                                    <span></span>{{child.childnav}}
                                </router-link>
                            </ul>
                        </transition>
                    </li>
                </ul>
        </el-col>
    <!--</el-row>-->
</template>
<style scoped>
    .sidenav{padding:6px 0;}
    .sidenav .el-row{padding:10px 0;}
    .childnav{background: #eee;line-height: 30px;}
    .childnav span{display: inline-block;width: 20px;}
    .sidenav li{cursor: pointer;}
    .sidenav li:hover{background: #cae3ff;}
    .sidenav .current{color: #0074D9;}
    .sidenav .cur{background:#539ff2;color: #fff;}
    .views{margin:30px 40px;}
    .sidenav .icon{margin:0  10px;}
    .childnav{padding:4px 0;}
    .childnav span{margin-left:22px;}
    .childnav li{line-height: 32px;font-size: 14px;}
    .fade-enter-active, .fade-leave-active {
        transition: display 1s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        display: none;
    }
</style>
<script>
    export default{
        data(){
           return  {
               navlist:[
                   {
                       nav:'表单和表格',
                       parmas1:'table',
                       icon:'el-icon-message',
                       arrow:false,
                       cur:false,
                       child:[
                           {
                               childnav:'表格',
                               parmas:'tables'
                           },
                           {
                               childnav:'表单',
                               parmas:'form'
                           },
                           {
                               childnav:'可增减表格',
                               parmas:'selftable'
                           }
                       ]
                   },
                   {
                       nav:'基本组件',
                       parmas1:'theme',
                       icon:'el-icon-message',
                       arrow:false,
                       cur:false,
                       child:[
                           {
                               childnav:'富文本编辑器',
                               parmas:'editor'
                           },
                           {
                               childnav:'列表拖拽',
                               parmas:'drag'
                           },
                           {
                               childnav:'分页',
                               parmas:'pages'
                           },
                           {
                               childnav:'图片上传',
                               parmas:'picupload'
                           },
                           {
                               childnav:'弹框',
                               parmas:'popin'
                           }
                       ]
                   },
                   {
                       nav:'图表',
                       parmas1:'chart',
                       icon:'el-icon-message',
                       arrow:false,
                       cur:false,
                       child:[
                           {
                               childnav:'折线图',
                               parmas:'line'
                           },
                           {
                               childnav:'柱图',
                               parmas:'bar'
                           }
                       ]
                   }
               ]
           }
        },
        mounted(){
            this.$http({
                url:'../data/sidebar.json'
            }).then(function(red){
                console.log(res)
            })
        },
        methods:{
            isshow(index){
                if(this.navlist[index].cur){
                    this.navlist[index].cur=false;
                    this.navlist[index].arrow=false;
                }else{
                    this.navlist.forEach(function(e){
                        e.arrow=false;
                        e.cur=false;
                    })
                    this.navlist[index].cur=true;
                    this.navlist[index].arrow=true;
                }


//                this.navlist.forEach(function(e){
//                    e.arrow=false;
//                    e.cur=false;
//                })
//                this.navlist[index].arrow=true;
//                this.navlist[index].cur=true;
//                console.log(this.navlist[index].arrow)
//                if(this.navlist[index].cur){
//                    this.navlist[index].cur=false;
//                    this.navlist[index].arrow=false;
//                }else{
//                    this.navlist[index].cur=true;
//                    this.navlist[index].arrow=true;
//                }
//                console.log(this.navlist[index].arrow)

            }
        }
    }
</script>