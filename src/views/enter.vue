<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-29 13:40:58
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-05 10:49:13
 -->
<template>
    <div class="entry">
        <div class="btns">
            <van-button type="default" @click="toPath('/login')">登陆</van-button>
            <van-button type="primary" @click="toPath('/register')">注册</van-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    toPath(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>
<style lang="less">
.entry {
  width: 100%;
  height: 100vh;
  background-image: url("~static/imgs/Wechatbg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  .btns {
    width: 100%;
    position: fixed;
    bottom: 0.4rem;
    .van-button--normal {
      margin: 0 0.4rem;
      width: 3rem;
      letter-spacing: 0.2rem;
      text-indent: 0.2rem;
    }
  }
}
</style>
