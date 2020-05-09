<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-29 21:56:45
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-05 17:45:51
 -->
<template>
    <div class="search" @click="toPath">
        <input type="text" class="search-keyword">
        <i class="iconfont iconfont-sousuo icon-custom">搜索</i>
    </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    toPath() {
      this.$router.push({
        path: "/searchpage"
      });
    }
  }
};
</script>
<style lang="less">
.search {
  width: 100%;
  position: relative;
  margin: 0.2rem auto;
  .search-keyword {
    margin: 0 2%;
    width: 96%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    border: 0px solid #fff;
    border-radius: 4px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    padding: 4px 0px;
  }
  .icon-custom {
    display: inline-block;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #888;
  }
}
</style>

