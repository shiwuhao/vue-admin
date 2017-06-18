<template>
  <ul class="sidenav">
    <li>
      <el-row :gutter="0">
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <span class="el-icon-message"></span>
          <span>导航一</span>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <span class="el-icon-arrow-down"></span>
        </el-col>
      </el-row>
      <ul class="childnav">
        <li>子导航</li>
        <li>子导航2</li>
        <li>子导航3</li>
      </ul>
    </li>
    <li>
      <el-row>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <span class="el-icon-message"></span>
          <span>导航二</span>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <span class="el-icon-arrow-down"></span>
        </el-col>
      </el-row>
      <ul class="childnav">
        <li>子导航</li>
        <li>子导航2</li>
        <li>子导航3</li>
      </ul>
    </li>
  </ul>
</template>
<style>
  .sidenav .el-row{padding:6px 0;}
  .childnav{background: #dfdfdf;line-height: 30px;padding-left:20px;}
  .sidenav li{cursor: pointer;}
</style>