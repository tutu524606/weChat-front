<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-07 09:55:53
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-07 10:53:36
 -->
<template>
    <div class="add" v-show="show">
        <van-cell center icon-prefix="iconfont" icon="sousuo" value="发起群聊" arrow-direction="right">
            <template #icon>
                <van-image :src="require('../assets/images/head-photo/web-use/group-chat.png')" />
            </template>
        </van-cell>
        <van-cell center icon-prefix="iconfont" icon="sousuo" value="添加朋友" arrow-direction="right">
            <template #icon>
                <van-image :src="require('../assets/images/head-photo/web-use/add-friend.png')" />
            </template>
        </van-cell>
        <van-cell center icon-prefix="iconfont" icon="sousuo" value="扫一扫" arrow-direction="right">
            <template #icon>
                <van-image :src="require('../assets/images/head-photo/web-use/add-look.png')" />
            </template>
        </van-cell>
        <van-cell center icon-prefix="iconfont" icon="sousuo" value="收付款" arrow-direction="right">
            <template #icon>
                <van-image :src="require('../assets/images/head-photo/web-use/pay-change.png')" />
            </template>
        </van-cell>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["show"]
};
</script>

