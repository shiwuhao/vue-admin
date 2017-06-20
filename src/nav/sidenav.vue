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
      <!--<ul class="childnav">-->
        <!--<li>子导航</li>-->
        <!--<li>子导航2</li>-->
        <!--<li>子导航3</li>-->
      <!--</ul>-->
      <ul class="childnav">
        <router-link tag="li" to="/table/fo" active-class="current"><span></span>子导航</router-link>
        <router-link tag="li" to="/table/fo2" active-class="current"><span></span>子导航2</router-link>
        <router-link tag="li" to="/table/fo3" active-class="current"><span></span>子导航3</router-link>
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
        <router-link tag="li" to="/theme/fo" active-class="current"><span></span>子导航</router-link>
        <router-link tag="li" to="/theme/fo2" active-class="current"><span></span>子导航2</router-link>
        <router-link tag="li" to="/theme/fo3" active-class="current"><span></span>子导航3</router-link>
      </ul>
    </li>
  </ul>
</template>