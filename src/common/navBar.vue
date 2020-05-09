<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-28 20:39:14
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-07 10:54:50
 -->
<template>
  <div class="navBar" :style="navBarShowPaths.includes($router.currentRoute.path) ? '' : 'position: fixed'">
    <van-nav-bar :title="router ? router.meta.title : $router.currentRoute.meta.title" :left-arrow="navBarShowPaths.includes($router.currentRoute.path)" @click-left="back">
      <template #right v-if="!navBarShowPaths.includes($router.currentRoute.path)">
        <div class="right-icon">
          <!-- <i class="iconfont iconfont-jiahao" style="color:#000"></i> -->
          <van-icon @click="navIconClick" class-prefix="iconfont" :name="$router.currentRoute.path == '/chats' ? 'jiahao' : ($router.currentRoute.path == '/contact' ? 'tianjiahaoyou' : '')" />
          <add :show="show" />
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import { navBarShowPaths } from "../constants/index.js";
import add from "../components/add";
export default {
  name: "NavBar",
  data() {
    return {
      navBarShowPaths: navBarShowPaths,
      show: false
    };
  },
  created() {
    console.log(this.$router);
  },
  props: ["router"],
  components: {
    add
  },
  methods: {
    back() {
      this.$router.back();
    },
    navIconClick() {
      if (this.$route.path == "/chats") {
        this.show = !this.show;
      }
    }
  }
};
</script>
<style lang="less">
.navBar {
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #f1f0f6;
  .van-nav-bar {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>
