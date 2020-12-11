import axios from "axios"

// 请求拦截器
axios.interceptors.request.use(
    config => {
        config.baseURL = "https://mock.yonyoucloud.com/mock/16414"
        // if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.myAuthorization =
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE2MDczOTQ5OTksImV4cCI6MTYwNzQ4MTM5OX0.rzmxKwx5n7-XeqhvNd3_F4ljmK8dqpnomMGJmgpHNsA"
        //config.headers['Authorization'] = token;
        // }
        // if(!config.hasOwnProperty('showError')){
        // config.showError = true
        // }
        return config
    },
    err => {
        console.log(err)
        // 发生错误做的一些事情
        return Promise.reject(err)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    res => {
        // if (res&&res.data&&res.data.success) {
        return res
        // }else{
        //     if(res.config.showError) {
        //如何请求失败，开启了错误提示；进行提示
        //  window.$toast(res.data.msg)
        // }
        // return Promise.reject(res)
        // }
    },
    error => {
        // if(error.response.status === 401) {
        // window.$toast('登录超时')
        // setTimeout(() => {
        //     uni.switchTab({
        //         url: '/pages/home/home'
        //     })
        // },1000)
        // }else if(error.response.status === 403) {
        // window.$toast('暂无权限')
        // }else {
        // window.$toast('网络错误')
        // }
        return Promise.reject(error)
    }
)
export default axios
