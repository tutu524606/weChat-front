<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-04 14:22:23
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-06 19:59:16
 -->
<template>
    <div class="find">
        <van-row>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="朋友圈" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/pyq.png')" />
                </template>
                <template #right-icon #title>
                    <img class="right-new-active" :src="require('../../assets/images/head-photo/web-use/04.png')" alt="">
                    <van-icon name="arrow" />
                </template>
            </van-cell>
        </van-row>
        <van-row>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="扫一扫" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/sys.png')" />
                </template>
                <template #right-icon #title>
                    <van-icon name="arrow" />
                </template>
            </van-cell>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="摇一摇" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/yyy.png')" />
                </template>
                <template #right-icon #title>
                    <van-icon name="arrow" />
                </template>
            </van-cell>
        </van-row>
        <van-row>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="看一看" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/kyk.png')" />
                </template>
                <template #right-icon #title>
                    <van-icon name="arrow" />
                </template>
            </van-cell>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="搜一搜" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/sysh.png')" />
                </template>
                <template #right-icon #title>
                    <van-icon name="arrow" />
                </template>
            </van-cell>
        </van-row>
        <van-row>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="附近的人" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/fj.png')" />
                </template>
                <template #right-icon #title>
                    <van-icon name="arrow" />
                </template>
            </van-cell>
        </van-row>
        <van-row>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="购物" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/gw.png')" />
                </template>
                <template #right-icon #title>
                    <van-icon name="arrow" />
                </template>
            </van-cell>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="游戏" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/game.png')" />
                </template>
                <template #right-icon #title>
                    <span class="right-title-content">你的和平精英周报</span>
                    <img class="right-new-active" :src="require('../../assets/images/head-photo/web-use/04.png')" alt="">
                    <van-icon name="arrow" />
                </template>
            </van-cell>
        </van-row>
        <van-row>
            <van-cell center icon-prefix="iconfont" icon="sousuo" value="小程序" arrow-direction="right">
                <template #icon>
                    <van-image :src="require('../../assets/images/head-photo/web-use/xcx.png')" />
                </template>
                <template #right-icon #title>
                    <van-icon name="arrow" />
                </template>
            </van-cell>
        </van-row>

    </div>
</template>
<script>
export default {};
</script>
<style lang="less">
</style>
