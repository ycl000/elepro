<template>
    <div>
        <main_nav :main_nav_title="main_nav_title"></main_nav>
        <el-card class="box-card">
            <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="powerName" label="名称">
                </el-table-column>
                <el-table-column prop="powerPath" label="路径">
                </el-table-column>
                <el-table-column prop="powerGrade" label="等级">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.powerGrade == '1'">一级</el-tag>
                        <el-tag
                            type="success"
                            v-if="scope.row.powerGrade == '2'"
                            >二级</el-tag
                        >
                        <el-tag type="info" v-if="scope.row.powerGrade == '3'"
                            >三级</el-tag
                        >
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
import main_nav from "@/components/common_vue/main_nav/main_nav.vue"
import $ from "../../assets/jquery-3.4.1"
export default {
    name: "powerList",
    data() {
        return {
            circleUrl: require("../../assets/bg.jpg"),
            username: "",
            password: "",
            activeindex: "1-1",
            main_nav_title: { title1: "权限管理", title2: "权限列表" },
            tableData: []
        }
    },
    components: {
        main_nav
    },
    created() {
        this.getPowerList()
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
        },
        getPowerList() {
            var that = this
            $.get("https://mock.yonyoucloud.com/mock/16414/powerList", function(
                data
            ) {
                that.tableData = data.data
            })
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
