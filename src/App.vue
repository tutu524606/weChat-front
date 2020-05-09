<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-29 09:53:12
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-04-29 14:07:52
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
// @import "./assets/styles/reset.less";
@import "./assets/styles/common.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
