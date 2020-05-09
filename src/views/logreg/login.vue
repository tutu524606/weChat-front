<!--
 * @Descripttion: 登录组件
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-28 20:13:11
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-04 14:33:10
 -->
<template>
    <div class="login">
        <NavBar></NavBar>
        <van-form @submit="lgin">
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
                <van-button round block type="info" native-type="submit" :disabled="longinBtn" :loading="longinBtn" loading-text="正在登陆...">登陆</van-button>
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
      password: "",
      longinBtn: false
    };
  },
  created() {
    console.log(this.login);
  },
  methods: {
    lgin(values) {
      this.longinBtn = true;
      this.$http({
        url: this.login.url,
        method: this.login.method,
        data: {
          username: this.username,
          password: this.password
        },
        success: response => {
          if (response.data.code == 200 && response.data.message === true) {
            Toast.success({ message: "登陆成功" });
            localStorage.setItem(
              "user",
              JSON.stringify({
                username: this.username,
                password: this.password
              })
            );
            this.$router.push({
              path: "/index"
            });
          } else {
            if (response.data.code == 201) {
              new Promise(resolve => {
                Toast.fail({
                  message: "该用户不存在，请注册后再登陆"
                });
                resolve();
              }).then(() => {
                console.log(this, "12321414");
                this.$router.push({
                  path: "/register"
                });
              });
            } else {
              if (response.data.message === false)
                Toast.fail({ message: "密码错误" });
            }
          }
        }
      }).then(() => {
        this.longinBtn = false;
      });
    }
  }
};
</script>
<style lang="less">
</style>
