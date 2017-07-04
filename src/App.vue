<template>
  <div id="app">
    <router-view></router-view>

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
.clearfix:after{display: block;content:'';clear:both;}
.clearfix{zoom:1;}
.gap{margin:10px 0 20px;}
.gap2{margin:20px 0 10px;}
.fl{float: left;}
.fr{float: right;}
.title{font-size: 18px;margin-bottom: 10px;}
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
  input{border:1px solid #dfdfdf;border-radius: 5px;line-height: 26px;padding:0 4px;}
  .white{color: #fff;}
</style>
