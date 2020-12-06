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
                // name: "Select1_3",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/welcome.vue"
                    )
            },
            {
                path: "/userList",
                name: "select1_1",
                // component:s,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import("../views/select1/userList.vue")
            },
            {
                path: "/roleList",
                // name: "Select1_2",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/select1/roleList.vue"
                    )
            },
            {
                path: "/powerList",
                // name: "Select1_3",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/select1/powerList.vue"
                    )
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
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
