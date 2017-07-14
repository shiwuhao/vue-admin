
<template>
   <div class="h">
       <router-view name="topbar"></router-view>
       <el-row :gutter="0" class="h">
           <router-view name="sidebar" id="sidenav" :class="toseenav ? 'shownav' : ''"  class="h leftnav"></router-view>
           <router-view name="viewarea"></router-view>
       </el-row>
   </div>
</template>
<script>
    export default{
       data(){
            return {
                toseenav:true
            }
       }
    }
</script>
<style>
    @media (min-width:300px) and (max-width:768px){
        #sidenav{width: 160px;position: fixed;top:50px;left:-160px;z-index:5;}
        .shownav{left:0 !important;}
    }
    .leftnav{background: #e5e9f2;border-radius: 0;}
</style>
