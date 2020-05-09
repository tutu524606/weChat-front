<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-05 18:36:14
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-05 22:36:26
 -->
<template>
    <div class="index-bar">
        <van-row class="single">
            <van-cell center title="" value="新的朋友">
                <template #title>
                    <img :src="require('../../assets/images/head-photo/web-use/04.png')" />
                </template>
            </van-cell>
        </van-row>
        <van-row class="single">
            <van-cell center title="" value="群聊">
                <template #title>
                    <img :src="require('../../assets/images/head-photo/web-use/02.png')" />
                </template>
            </van-cell>
        </van-row>
        <van-row class="single">
            <van-cell center title="" value="标签">
                <template #title>
                    <img :src="require('../../assets/images/head-photo/web-use/03.png')" />
                </template>
            </van-cell>
        </van-row>
        <van-row>
            <van-cell center title="" value="公众号">
                <template #title>
                    <img :src="require('../../assets/images/head-photo/web-use/01.png')" />
                </template>
            </van-cell>
        </van-row>
        <van-index-bar :sticky="false">
            <van-index-anchor v-for="(item,index) in Object.entries(sortListFriends)" :index="item[0]" :key="index">
                <div class="letter">{{item[0].toUpperCase()}}</div>
                <van-row>
                    <van-cell center v-for="(citem,cindex) in item[1].sort((x,y)=>x['pinyin'].localeCompare(y['pinyin']))" :key="cindex" title="" :value="citem.nickname">
                        <template #title>
                            <img :src="citem.head_photo" />
                        </template>
                    </van-cell>
                </van-row>
            </van-index-anchor>
        </van-index-bar>
    </div>
</template>
<script>
const pinyinHelper = require("pinyin4js");
export default {
  name: "ContactList",
  data() {
    return {
      listFriends: [
        {
          head_photo: require("../../assets/images/head-photo/web-use/1.png"),
          nickname: "代俊超"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/2.png"),
          nickname: "程肖誉"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/3.png"),
          nickname: "冯事成"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/4.png"),
          nickname: "孙长虹"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/5.png"),
          nickname: "史翔宇"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/6.png"),
          nickname: "邱江帅"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/7.png"),
          nickname: "毕鹏"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/8.png"),
          nickname: "秦志伟"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/9.png"),
          nickname: "王蔚然"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/10.png"),
          nickname: "崔宝庆"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/11.png"),
          nickname: "田阔"
        }
      ]
    };
  },
  computed: {
    sortListFriends() {
      const sortListData = {};
      const a = this.listFriends.map(v => {
        let qpName = pinyinHelper.convertToPinyinString(
          v.nickname,
          "#",
          PinyinFormat.WITH_TONE_MARK
        );
        let firstLetter = qpName.charAt(0);
        if (!(firstLetter in sortListData)) sortListData[firstLetter] = [];
        v.pinyin = qpName
          .split("#")
          .map(vv => {
            return vv.charAt(0);
          })
          .join("");
        sortListData[firstLetter].push(v);
        return v;
      });
      // .sort((x, y) => {
      //   return x["pinyin"].localeCompare(y["pinyin"]);
      // });
      return sortListData;
    }
  },
  created() {
    console.log(Object.entries(this.sortListFriends));
  }
};
</script>
<style lang="less">
.index-bar {
  .letter {
    text-align: left;
  }
}
</style>
