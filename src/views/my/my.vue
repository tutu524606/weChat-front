<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-04 14:22:30
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-07 09:40:45
 -->
<template>
    <div class="my">
        <div class="my-top">
            <van-icon class-prefix="iconfont" name="paizhao" />
            <van-row type="flex">
                <van-col span="6" center>
                    <van-image radius="8px" :src="require('../../assets/images/head-photo/web-use/my.png')" />
                </van-col>
                <van-col span="18">
                    <van-cell center title="代俊超" />
                    <van-cell center title="微信号：M-MTUTU">
                        <template #right-icon #value>
                            <van-icon class-prefix="iconfont" name="erweima" />
                            <van-icon name="arrow" />
                        </template>
                    </van-cell>
                </van-col>
            </van-row>
        </div>
        <div class="list-content">
            <van-row>
                <van-cell center icon-prefix="iconfont" icon="sousuo" value="支付" arrow-direction="right">
                    <template #icon>
                        <van-image :src="require('../../assets/images/head-photo/web-use/pay.png')" />
                    </template>
                    <template #right-icon #title>
                        <van-icon name="arrow" />
                    </template>
                </van-cell>
            </van-row>
            <van-row>
                <van-cell center icon-prefix="iconfont" icon="sousuo" value="收藏" arrow-direction="right">
                    <template #icon>
                        <van-image :src="require('../../assets/images/head-photo/web-use/collect.png')" />
                    </template>
                    <template #right-icon #title>
                        <van-icon name="arrow" />
                    </template>
                </van-cell>
                <van-cell center icon-prefix="iconfont" icon="sousuo" value="相册" arrow-direction="right">
                    <template #icon>
                        <van-image :src="require('../../assets/images/head-photo/web-use/photo-album.png')" />
                    </template>
                    <template #right-icon #title>
                        <van-icon name="arrow" />
                    </template>
                </van-cell>
                <van-cell center icon-prefix="iconfont" icon="sousuo" value="卡包" arrow-direction="right">
                    <template #icon>
                        <van-image :src="require('../../assets/images/head-photo/web-use/card-package.png')" />
                    </template>
                    <template #right-icon #title>
                        <van-icon name="arrow" />
                    </template>
                </van-cell>

                <van-cell center icon-prefix="iconfont" icon="sousuo" value="表情" arrow-direction="right">
                    <template #icon>
                        <van-image :src="require('../../assets/images/head-photo/web-use/face.png')" />
                    </template>
                    <template #right-icon #title>
                        <van-icon name="arrow" />
                    </template>
                </van-cell>
            </van-row>
            <van-row>
                <van-cell center icon-prefix="iconfont" icon="sousuo" value="设置" arrow-direction="right">
                    <template #icon>
                        <van-image :src="require('../../assets/images/head-photo/web-use/set.png')" />
                    </template>
                    <template #right-icon #title>
                        <van-icon name="arrow" />
                    </template>
                </van-cell>
            </van-row>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less">
</style>
