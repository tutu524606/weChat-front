<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-04 15:44:56
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-05 17:46:34
 -->
<template>
    <div class="contact-list">
      <van-row>
            <van-col span="4">
                <div class="head-photo">
                    <img :src="require('../../assets/images/head-photo/web-use/01.png')" alt="">
                </div>
            </van-col>
            <van-col span="20">
                <div class="nickname">新朋友</div>
                <van-divider/>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="4">
                <div class="head-photo">
                    <img :src="require('../../assets/images/head-photo/web-use/02.png')" alt="">
                </div>
            </van-col>
            <van-col span="20">
                <div class="nickname">群聊</div>
                <van-divider/>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="4">
                <div class="head-photo">
                    <img :src="require('../../assets/images/head-photo/web-use/03.png')" alt="">
                </div>
            </van-col>
            <van-col span="20">
                <div class="nickname">标签</div>
                <van-divider/>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="4">
                <div class="head-photo">
                    <img :src="require('../../assets/images/head-photo/web-use/04.png')" alt="">
                </div>
            </van-col>
            <van-col span="20">
                <div class="nickname">公众号</div>
                <van-divider/>
            </van-col>
        </van-row>
      <van-row v-for="(item,index) in Object.entries(sortListFriends)" :key="index" class="friend">
        <div class="letter">{{item[0].toUpperCase()}}</div>
        <van-row v-for="(item,index) in item[1].sort((x,y)=>x['pinyin'].localeCompare(y['pinyin']))" :key="index">
            <van-col span="4">
                <div class="head-photo">
                    <img :src="item.head_photo" alt="">
                </div>
            </van-col>
            <van-col span="20">
                <div class="nickname">{{item.nickname}}</div>
                <van-divider/>
            </van-col>
        </van-row>
      </van-row>
        
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
.contact-list {
  background-color: #fff;
  .head-photo {
    margin: 6px 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      vertical-align: top;
    }
  }
  .nickname {
    margin: 6px 0;
  }
}
</style>
