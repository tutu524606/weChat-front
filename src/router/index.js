/*
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-29 09:53:12
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-04-29 21:52:54
 */
import Vue from 'vue'
import Router from 'vue-router'
import { RouterConfig } from './router.conf'
import NProgress from 'nprogress'
// 引入接口统一管理
import { API } from '../api/api';
console.log(API);
Vue.use(Router)
const router = new Router({
    // mode: 'hash | history',
    routes: RouterConfig
})
router.beforeEach((to, from, next) => {
    NProgress.start();
    Vue.use((Vue) => {
        Vue.mixin({
            computed: API[to.path]
        })
    });
    const isLogin = localStorage.getItem('user');
    if (to.meta.requireAuth) {
        isLogin ? next() : next({ path: '/login' });
    } else {
        next()
    }
    NProgress.done();
});

router.afterEach((to, from, next) => {
    NProgress.done();
})

export default router