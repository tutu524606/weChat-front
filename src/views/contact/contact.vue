<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-04 14:19:53
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-05 22:40:26
 -->
<template>
  <div class="contact">
    <Search></Search>
    <van-divider/>
    <!-- <contact-list/> -->
    <index-bar/>
  </div>
</template>
<script>
import ContactList from "./contactList";
import IndexBar from "./indexBar";
export default {
  components: {
    ContactList,
    IndexBar
  }
};
</script>
<style lang="less">
.contact {
  height: calc(100vh - 92px);
  overflow: scroll;
}
</style>
