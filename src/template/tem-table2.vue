<template>
  <ul class="forms">
      <li>
          <el-col :xs="2" :sm="2" :md="2" :lg="2" class="item">普通框</el-col>
          <el-col :xs="9" :sm="9" :md="9" :lg="9">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
      </li>
      <li>
          <el-col :xs="2" :sm="2" :md="2" :lg="2" class="item">禁用</el-col>
          <el-col :xs="9" :sm="9" :md="9" :lg="9">
              <el-input
                      placeholder="请输入内容"
                      v-model="input1"
                      :disabled="true">
              </el-input>
          </el-col>

      </li>
      <li>
          <el-col :xs="2" :sm="2" :md="2" :lg="2" class="item">带icon</el-col>
          <el-col :xs="9" :sm="9" :md="9" :lg="9">
              <el-input
                      placeholder="请选择日期"
                      icon="search"
                      v-model="input2"
                      :on-icon-click="handleIconClick">
              </el-input>
          </el-col>
      </li>
      <li>
          <el-col :xs="2" :sm="2" :md="2" :lg="2" class="item">文本域</el-col>
          <el-col :xs="9" :sm="9" :md="9" :lg="9">
              <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="textarea">
              </el-input>
          </el-col>
      </li>
  </ul>
</template>

<script>
    export default {
        data() {
            return {
                input:'',
                input1:'',
                input2:'',
                textarea:''
            }
        },
        methods: {
            handleIconClick(ev) {
                console.log(ev);
            }
        }
    }
</script>
<style>
    .forms{background: #fff;}
    .forms .item{line-height:36px;}
    .forms li{margin-bottom: 10px;overflow: hidden;}
</style>