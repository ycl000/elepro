<template>
    <div class="bg">
        <!-- <img src="../assets/bg.jpg" alt=""> -->
        <div class="login">
            <!-- <div class="loginType"><span>手机登录</span><span>密码登录</span></div> -->
            <div class="user">
                <div class="userInput">
                    <input
                        type="text"
                        v-model="username"
                        placeholder="请输入内容"
                    />
                </div>
                <div class="passInput">
                    <input
                        placeholder="请输入密码"
                        type="password"
                        v-model="password"
                    />
                </div>
                <div class="login_btn">
                    <input type="button" @click="login()" value="登录" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    components: {},
    computed: {},
    mounted() {
        // 绑定enter事件
        this.enterKeyup()
    },
    methods: {
        // 登录点击
        login: function() {
            if (this.username && this.password) {
                document.cookie = "name=" + this.username
                document.cookie = "password=" + this.password
                this.$store.commit("setToken", this.username)
                this.$router.push({ name: "Home" })
            } else {
                alert("账号密码不能为空")
            }
        },
        // 键盘点击触发
        enterKey(event) {
            // e.keyCode||e.which||e.charCode; 兼容  各个浏览器不一样
            const componentName = this.$options.name
            // console.log(componentName,event.keyCode,event.which,event.charCode)
            if (componentName == "Login") {
                const code = event.keyCode
                    ? event.keyCode
                    : event.which
                    ? event.which
                    : event.charCode
                if (code == 13) {
                    this.login()
                }
            }
        },
        // 销毁键盘点击事件
        enterKeyupDestroyed() {
            document.removeEventListener("keyup", this.enterKey)
        },
        // 给document添加键盘点击事件
        enterKeyup() {
            document.addEventListener("keyup", this.enterKey)
        }
    },
    // 页面销毁时  销毁监听键盘事件
    destroyed() {
        // 销毁enter事件
        console.log(
            `"没有使用keep-alive 时  离开会自动调用  使用了keep-alive  只能在beforeRouteLeave 中自行调用"`
        )
        this.enterKeyupDestroyed()
    },
    beforeRouteLeave(to, from, next) {
        console.log("路由离开之前")
        next()
    }
}
</script>
<style scoped>
.bg {
    height: 100vh;
    widows: 100%;
    background-image: url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    /* filter: blur(2px);  #252d42*/
}
.login {
    width: 400px;
    height: 300px;
    background: #252d42;
    border-radius: 5px;
    opacity: 0.7;
    font-weight: bold;
    position: relative;
}
.user {
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.userInput input,
.passInput input {
    height: 40px;
    border-radius: 5px;
    width: 80%;
    margin: auto;
    outline: none;
    font-size: 15px;
    border: 1px solid #4267a1;
    padding: 0px 10px;
    color: white;
    background: #252d42;
}
.userInput input::placeholder,
.passInput input::placeholder {
    color: white;
}
.login_btn input {
    height: 40px;
    border-radius: 8px;
    width: 80%;
    margin: auto;
    outline: none;
    background: #3b5274;
    border: none;
    color: white;
    font-size: 20px;
    letter-spacing: 4px;
}
.login_btn input:hover {
    background: #252d42;
    border: 1px solid #2b88ca;
}
.passInput input:focus,
.userInput input:focus {
    border: 1px solid #2794dd;
}
</style>
