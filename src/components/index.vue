<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-04 14:29:20
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-07 10:56:35
 -->
<template>
  <div class="index" :style="'padding-top:' + (navBarIndexConf.includes($router.currentRoute.path) ? '46px' : '0px')">
    <NavBar v-if="navBarIndexConf.includes($router.currentRoute.path)" :router="router"></NavBar>
    <router-view/>
    <footer>
      <Footer :router="router"></Footer>
    </footer>
  </div>
</template>
<script>
import { navBarIndexConf } from "../constants/index.js";
export default {
  data() {
    return {
      router: null,
      navBarIndexConf: navBarIndexConf
    };
  },
  created() {},
  beforeRouteUpdate(to, from, next) {
    this.router = to;
    next();
  }
};
</script>
<style lang="less">
.index {
  height: 100%;
  position: relative;
}
</style>
