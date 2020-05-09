<!--
 * @Descripttion: 注册组件
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-28 20:13:11
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-04-29 20:38:30
 -->
<template>
    <div>
        <NavBar></NavBar>
        <van-form @submit="regst">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{required: true, message: '请填写用户名'}]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{required: true, message: '请填写密码'}]"
            />
            <div style="margin: 16px">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
    console.log(this.register);
  },
  methods: {
    regst(values) {
      this.$http({
        url: this.register.url,
        method: this.register.method,
        data: {
          username: this.username,
          password: this.password
        },
        success: response => {
          response.data.code == 200
            ? Toast.success({ message: "注册成功" })
            : response.data.message.code == 11000
              ? Toast.fail({ message: "用户已注册" })
              : Toast.fail({ message: "注册失败" });
        }
      });
    }
  }
};
</script>
<style lang="less">
</style>
