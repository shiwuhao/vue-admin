
<template>
   <div>
       <div>
           <router-view name="topbar"></router-view>
       </div>
       <div>
           <el-row :gutter="0">
               <router-view name="sidebar"></router-view>
               <router-view name="viewarea"></router-view>
           </el-row>
       </div>
   </div>
</template>
<style>
    .sidenav .el-row{padding:8px 0;}
    .childnav{background: #eee;line-height: 30px;}
    .childnav span{display: inline-block;width: 20px;}
    .sidenav li{cursor: pointer;}
    .sidenav li:hover{background: #d3dce6;}
    .sidenav .current{color: #0074D9;}
    .topbar{padding:5px 0;background: #539ff2;}
    .user{position: relative;}
    .user ul{position: absolute;top:45px;left:0;z-index:10;background: #fff;padding:6px 20px;border:1px solid #dfdfdf;border-radius: 3px;width:30%;}
    .user li{line-height: 30px;cursor: pointer;}
    .user li:hover{color: #0074D9;}
    .username span{float:left;line-height: 40px;margin-right: 6px;}
    .username img{float: left;}
    .views{margin:30px 40px;}
    .flexbtn{line-height: 40px;margin-left:40px;cursor: pointer;}
    .sidenav .icon{margin:0  10px;}
    .childnav{padding:4px 0;}
    .childnav span{margin-left:22px;}
    .childnav li{line-height: 32px;font-size: 14px;}

    @media (min-width:320px) and (max-width:750px ) {
        #leftnav,#sidenav{display: none;}
        html,body{font-size: 12px;}
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