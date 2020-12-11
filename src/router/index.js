import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import store from "../store/index"
// import s from "../views/select1/select1_1.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        redirect: "/welcome",
        meta: {
            title: "主页",
            requestAuth: true // 设置访问需要权限
        },
        children: [
            {
                path: "/welcome",
                name: "welcome",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/welcome.vue"
                    )
            },
            {
                path: "/userList",
                name: "userList",
                // component:s,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import("../views/userMessage/userList.vue")
            },
            {
                path: "/roleList",
                name: "roleList",
                component: () => import("../views/powerMessage/roleList.vue")
            },
            {
                path: "/powerList",
                name: "powerList",
                component: () => import("../views/powerMessage/powerList.vue")
            },
            {
                path: "/productList",
                name: "productList",
                component: () => import("../views/productMessage/productList")
            },
            {
                path: "/productSort",
                name: "productSort",
                component: () => import("../views/productMessage/productSort")
            },
            {
                path: "/sortPramas",
                name: "sortPramas",
                component: () => import("../views/productMessage/sortPramas")
            },
            {
                path: "/orderList",
                name: "orderList",
                component: () => import("../views/orderMessage/orderList")
            },
            {
                path: "/dataReports",
                name: "dataStatistics",
                component: () =>
                    import("../views/dataStatistics/dataStatistics")
            },
            {
                path: "/person",
                name: "person",
                component: () => import("../views/personer")
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

// 路由前置导航守卫    在进入某个路由之前可判断 用户是否已登录 等权限
router.beforeEach((to, from, next) => {
    //判断进入是否需要权限
    if (to.meta.requestAuth) {
        if (store.state.token) {
            //如果已登录
            next()
        } else {
            router.push({ path: "/login" })
        }
    } else {
        next()
    }
})
export default router
