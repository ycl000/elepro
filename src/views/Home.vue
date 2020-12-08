<template>
    <el-container>
        <el-header>
            <myHead :circleUrl="circleUrl" :username="username"></myHead>
        </el-header>
        <el-container class="s">
            <leftNav>
                <template v-slot:sl><span>父组件自定义导航</span></template>
            </leftNav>
            <el-main>
                <router-view></router-view>
                <!-- <div >
          <div >
            <span class="welcome_title">欢迎来到某某 服务管理平台</span>
           
          </div>
          
        </div> -->
            </el-main>
        </el-container>
    </el-container>
    <!-- </div> -->
</template>

<script>
// @ is an alias to /src
//  /* eslint-disable */
// import HelloWorld from "@/components/HelloWorld.vue";
import leftNav from "../components/common_vue/left_nav/left_nav.vue"
import myHead from "../components/common_vue/head/head.vue"

export default {
    name: "Home",
    data() {
        return {
            circleUrl: require("../assets/bg.jpg"),
            username: "",
            password: "",
            activeindex: "1-1"
        }
    },
    components: {
        // HelloWorld
        leftNav,
        myHead
    },

    mounted() {
        // 事件总线监听
        this.$bus.$on("quit", options => {
            // console.log(options)
            this.quit(options)
        })
        // console.log(this.getCookie());
        if (!this.getCookie()) {
            this.$router.push({ name: "Login" })
        }
        this.username = this.getCookie()
    },
    methods: {
        getCookie: function() {
            console.log()
            var username = this.get_Cookie()
            return username
        },
        quit: function(data) {
            console.log(data)
            this.$store.commit("clearToken")
            this.$router.push({ path: "/login" })
        }
    }
}
</script>
<style >
.el-header {
    padding: 0px 60px;
    background-image: url(/img/bg.3cc93034.jpg);
    background-repeat: no-repeat;
    text-align: center;
    background-size: cover;
    line-height: 60px;
    color: white;
}
.el-breadcrumb {
    /* padding: 0px 20px; */
    line-height: 40px !important;
    height: 40px;
    /* background: white; */
}

.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    height: 100%;
    padding: 0px !important;
}

body > .el-container {
    margin-bottom: 40px;
}
.el-container {
    height: 100%;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
