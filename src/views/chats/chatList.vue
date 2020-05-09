<!--
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-03 15:12:06
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-04 16:05:03
 -->
<template>
    <div class="chat-list">
        <van-row v-for="(item,index) in listData" :key="index">
            <van-col span="4">
                <div class="head-photo">
                    <img :src="item.head_photo" alt="">
                </div>
            </van-col>
            <van-col span="20">
                <div class="nickname-newmessage">
                    <p class="nickname">代俊超 <i class="time">下午11:30</i></p>
                    <p class="newmessage">hello，world！<i class="iconfont icon-jiahao01"></i></p>
                </div>
                <van-divider/>
            </van-col>
        </van-row>
        
    </div>
</template>
<script>
export default {
  name: "ChatList",
  data() {
    return {
      listData: [
        {
          head_photo: require("../../assets/images/head-photo/web-use/1.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/2.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/3.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/4.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/5.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/6.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/7.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/8.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/9.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/10.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        },
        {
          head_photo: require("../../assets/images/head-photo/web-use/11.png"),
          nickname: "代俊超",
          time: "下午11:30",
          new_message: "hello,world!"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.chat-list {
  background-color: #fff;
  .head-photo {
    margin: 10px 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      vertical-align: top;
    }
  }
  .nickname-newmessage {
    margin: 10px 0;
    p {
      margin: 0;
      padding: 1px 0;
    }
    .nickname {
      font-size: 16px;
      position: relative;
      .time {
        font-size: 12px;
        color: #aaa;
        font-style: normal;
        position: absolute;
        right: 10px;
        top: 0;
      }
    }
    .newmessage {
      position: relative;
      font-size: 14px;
      color: #999;
      .icon-jiahao01 {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0%, -50%);
      }
    }
  }
}
</style>
