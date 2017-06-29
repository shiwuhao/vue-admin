
<template>
   <div>
       <router-view name="topbar"></router-view>
       <el-row :gutter="0">
           <router-view name="sidebar" id="sidenav" v-show="leftnav"></router-view>
           <router-view name="viewarea"></router-view>
       </el-row>
   </div>
</template>
<script>
    export default{
        data(){
        return {
            leftnav:true
        }
    }
    }
</script>
