/*
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-28 20:43:57
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-04 00:15:05
 */
import NavBar from './navBar.vue'
import Search from './search.vue'
import Footer from './footer.vue'
export default {
    install(Vue) {
        Vue.component(NavBar.name, NavBar);
        Vue.component(Search.name, Search);
        Vue.component(Footer.name, Footer);
    }
}