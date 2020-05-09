import axios from 'axios'
import qs from 'qs'
import store from '../store'
import { baseUrl } from './api'

// 请求拦截器
axios.interceptors.request.use(
    config => {
        config.baseURL = baseUrl // 接口公共前缀
        config.withCredentials = true; // 允许携带token，解决跨域的相关问题
        config.timeout = 6000; // 超时请求设置
        let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
        // let CSRF = store.getters.csrf;
        if (token) {
            config.headers = {
                'token': token,
                'content-type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
                'responseType': 'json'
            }
        }
        config.crossDomain = true;
        config.data = qs.stringify(config.data);
        return config;
    },
    error => {
        switch (true) {
            case !!error.response:
                if (error.response.status == 401) {

                }
                break;
            case !!error.request:
                /**
                 * readyState状态值：
                 * 0：初始化，XMLHttpRequest对象还没有完成初始化
                 * 1：载入，XMLHttpRequest对象开始发送请求
                 * 2：载入完成，XMLHttpRequest对象的请求发送完成
                 * 3：解析，XMLHttpRequest对象开始读取服务器的响应
                 * 4：完成，XMLHttpRequest对象读取服务器响应结束
                 */
                if (error.request.readyState == 4 && error.request.status == 0) {
                    //我在这里重新请求
                }
                break;
        }
        return Promise.reject(error);
    }
)

// 响应拦截
axios.interceptors.response.use(
    response => {
        // 定时刷新token
        // if (!response.data.value && response.data.data.message === 'token invalid') {
        //     // 刷新token
        //     store.dispatch('refresh').then(response => {
        //         sessionStorage.setItem('token', response.data)
        //     }).catch(error => {
        //         throw new Error('token刷新' + error)
        //     })
        // }
        return response;
    },
    error => {
        Message.error({
            message: '加载失败'
        })
        return Promise.reject(error);
    }
)

function Http(options) {
    return axios.request({
        url: options.url,
        method: options.method,
        url: options.url,
        data: (/\b(put|post|delete)\b/i.test(options.method)) ? options.data : {},
        params: (/^get$/i.test(options.method)) ? options.data : {}
    }).then(data => {
        if (data.data != null) {
            let result = data.data;
            if (result != null && result != "") {
                // data.data = JSON.parse(result);
                data.data = result;
            }
        }
        if (options.success) {
            options.success(data);
        }
        return data;
    })
}
window.$http = Http;
export default {
    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            '$http': {
                value: Http
            }
        })
    }
}