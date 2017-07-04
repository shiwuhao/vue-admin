
<template>
    <!--<el-row :gutter="0">-->
        <el-col :xs="24" :sm="24" :md="18" :lg="19">
            <div class="grid-content views">
                <router-view name="views"></router-view>
            </div>
        </el-col>
    <!--</el-row>-->
</template>
<style scoped>
    .views{margin:30px 40px;}
</style>