<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-04 10:14:37
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-04 10:51:47
 -->
<template>
    <div class="search-page">
        <form action="">
        <van-search
            v-model="keyword"
            show-action
            placeholder="搜索"
            @search="onSearch"
            @cancel="onCancel"
            autofocus
        />
        </form>
        <div class="default-search" v-if="keyword==''">
            <p>搜索指定内容</p>
            <van-row>
                <van-col span="8">朋友圈</van-col>
                <van-col span="8">文章</van-col>
                <van-col span="8">公众号</van-col>
            </van-row>
            <van-row>
                <van-col span="8">小程序</van-col>
                <van-col span="8">音乐</van-col>
                <van-col span="8">表情</van-col>
            </van-row>
        </div>
        <div v-else>
            搜索结果列表
        </div>
    </div>
</template>
<script>
export default {
  name: "search-page",
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    onSearch() {},
    onCancel() {
      this.$router.back();
    }
  }
};
</script>
<style lang="less">
.search-page {
  //   background: #f1f0f6;

  .default-search {
    padding: 0px 0.4rem;
    p {
      line-height: 1.2rem;
      color: #999;
    }
  }
}
</style>
