/*
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-04-18 23:43:46
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-07 10:09:13
 */
const MainRouters = [{
        path: '/',
        component: () => (
            import ('../views/enter'))
    }, {
        path: '/login',
        component: () => (
            import ('../views/logreg/login.vue')),
        meta: {
            title: '登陆'
        }
    }, {
        path: '/register',
        component: () => (
            import ('../views/logreg/register.vue')),
        meta: {
            title: '注册'
        }
    }, {
        path: '/add',
        component: () => (
            import ('../components/add.vue')),
    }, {
        path: '/index',
        component: () => (
            import ('../components/index.vue')),
        redirect: "/chats",
        meta: {
            requireAuth: true
        },
        children: [{
            path: '/chats',
            component: () => (
                import ('../views/chats/chat.vue')),
            meta: {
                title: '微信',
                requireAuth: true
            }
        }, {
            path: '/contact',
            component: () => (
                import ('../views/contact/contact.vue')),
            meta: {
                title: '通讯录',
                requireAuth: true
            }
        }, {
            path: '/find',
            component: () => (
                import ('../views/find/find.vue')),
            meta: {
                title: '发现',
                requireAuth: true
            }
        }, {
            path: '/my',
            component: () => (
                import ('../views/my/my.vue')),
            meta: {
                title: '发现',
                requireAuth: true
            }
        }, ]
    }, {
        path: '/searchpage',
        component: () => (
            import ('../common/searchpage.vue')),
    }, {
        path: "/404",
        component: resolve => require(["@/components/404"], resolve)
    },
    {
        path: '*',
        redirect: '/404'
    }
];

export const RouterConfig = [...MainRouters];