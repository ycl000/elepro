import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./plugins/element.js"
import cookie from "./components/commom/js/cookie.js"
import axios from "./axios/axios"
axios.defaults.baseURL = "https://mock.yonyoucloud.com/mock/16414"
Vue.prototype.$http = axios
Vue.use(cookie)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
