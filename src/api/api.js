/*
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-17 17:24:33
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-04-29 20:28:51
 */
// 接口分类统一管理
export const baseUrl = '';
const b_u_test = '/app';
export const API = {
    '/login': {
        'login': () => {
            return {
                method: 'post',
                url: b_u_test + '/user/login'
            }
        }
    },
    '/register': {
        'register': () => {
            return {
                method: 'post',
                url: b_u_test + '/user/register'
            }
        }
    }
}

// export const API = (Vue) => {
//     Object.defineProperties(Vue.prototype, {
//         '$API': {
//             value: apis
//         }
//     })
// }