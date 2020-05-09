<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-29 21:28:07
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-07 10:57:06
 -->
<template>
  <div class="chat">
    <div class="chat-content">
      <Search></Search>
      <van-divider/>
      <chat-list></chat-list>
    </div>
  </div>
</template>
<script>
import ChatList from "./chatList";
export default {
  components: {
    ChatList
  }
};
</script>
<style lang="less">
.chat {
  height: 100%;
  .chat-content {
    height: calc(100vh - 92px);
    overflow: scroll;
  }
}
</style>

