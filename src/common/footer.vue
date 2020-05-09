<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-04 00:12:42
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-05 18:11:00
 -->
<template>
    <div class="footer">
        <van-tabbar v-model="active" active-color="#88f388">
            <van-tabbar-item v-for="(item,index) in tabbarData" :key="index" icon-prefix="iconfont" :icon="item.icon" :badge="item.badge" :dot="item.dot" :to="item.path">{{item.tabbar_name}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      active: 0,
      tabbarData: [
        {
          tabbar_name: "微信",
          icon: "liaotian",
          dot: false,
          path: "/chats",
          badge: "20"
        },
        {
          tabbar_name: "通讯录",
          icon: "tongxunlu",
          dot: false,
          path: "/contact",
          badge: ""
        },
        {
          tabbar_name: "发现",
          icon: "faxian",
          dot: true,
          path: "/find",
          badge: ""
        },
        {
          tabbar_name: "我",
          icon: "wo",
          dot: false,
          path: "/my",
          badge: ""
        }
      ]
    };
  },
  created() {
    this.active = this.tabbarData.findIndex((v, index) => {
      return v.path == this.$router.currentRoute.path;
    });
  }
};
</script>

