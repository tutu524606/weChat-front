/*
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-29 09:53:12
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-09 11:50:08
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入阿里巴巴字体图标 测试1
import './assets/styles/iconfont/iconfont.css'

// 引入ui组件样式修改文件
import './assets/styles/resetui.less'

// 移动端点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);

// 引入vantui
import Vant from 'vant'
Vue.use(Vant);

// 注册全局公共组件
import commonUI from './common/index'
Vue.use(commonUI);

// 转化click为touch事件
import '@vant/touch-emulator'

// 引入阿里的lib-flexible自适应布局方案
import 'lib-flexible'

// 引入http请求模块
import http from './api/http'
Vue.use(http);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})