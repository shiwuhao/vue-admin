<template>
  <div id="app">
    <el-row :gutter="0">
      <el-col :xs="8" :sm="14" :md="8" :lg="6"><div class="grid-content bg-purple"><h1>献县跑团</h1></div></el-col>
      <el-col :xs="16" :sm="10" :md="16" :lg="18">
        <el-row>
          <el-col :xs="16" :sm="10" :md="16" :lg="18">
            <div class="grid-content bg-purple">
              <div class="el-icon-d-arrow-left"></div>
            </div>
          </el-col>
          <el-col :xs="8" :sm="14" :md="8" :lg="6">
            <div class="grid-content bg-purple">
              <div><span>jeeny</span><img src="" alt="" width="50" height="50"></div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :xs="8" :sm="14" :md="8" :lg="6">
        <div class="grid-content bg-purple">
          <router-view name="sidenav"></router-view>
        </div>
      </el-col>
      <el-col :xs="16" :sm="10" :md="16" :lg="18">
        <div class="grid-content bg-purple-light">
          <router-view name="views"></router-view>
          <router-view name="page"></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
*{margin:0;padding: 0;}
li{list-style: none;}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
