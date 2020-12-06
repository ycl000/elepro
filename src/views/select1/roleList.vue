<template>
    <div>
        <main_nav :main_nav_title="main_nav_title"></main_nav>
        <el-card class="box-card">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import main_nav from "@/components/common_vue/main_nav/main_nav.vue"
export default {
    name: "select1_2",
    data() {
        return {
            circleUrl: require("../../assets/bg.jpg"),
            username: "",
            password: "",
            activeindex: "1-1",
            main_nav_title: { title1: "权限管理", title2: "角色列表" },
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                }
            ]
        }
    },
    components: {
        main_nav
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
<style>
.welcome_title {
    text-align: center;
    text-shadow: 3px 3px 3px gray;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;
}
.el-header {
    padding: 0px 60px;
    background-image: url(/img/bg.3cc93034.jpg);
    background-repeat: no-repeat;
    text-align: center;
    background-size: cover;
    line-height: 60px;
    color: white;
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
.el-main > div {
    padding: 0px 40px;
    background: #e9eef3;
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
.el-table td,
.el-table th {
    text-align: center !important;
}
</style>
