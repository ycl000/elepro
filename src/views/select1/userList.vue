<template>
    <div>
        <!-- 面包屑导航 组件 -->
        <main_nav :main_nav_title="main_nav_title"></main_nav>
        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                        >
                            <el-button
                                slot="append"
                                icon="el-icon-search"
                            ></el-button>
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="4"
                    ><div class="grid-content bg-purple">
                        <el-button type="primary">添加用户</el-button>
                    </div></el-col
                >
            </el-row>
            <!-- 用户列表 -->
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
                <el-table-column prop="status" label="状态">
                    <!-- <el-switch :value=""> -->
                    <template slot-scope="scope"
                        ><el-switch
                            v-model="scope.row.status"
                            @change="changeStatus(scope.row.status, scope.row)"
                            >></el-switch
                        ></template
                    >
                    <!-- </el-switch> -->
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <el-button type="danger" icon="el-icon-delete" size="mini"
                        ></el-button
                    >
                    <el-button type="primary" icon="el-icon-edit" size="mini"
                        ></el-button
                    >
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import main_nav from "@/components/common_vue/main_nav/main_nav.vue"
import $ from "../../assets/jquery-3.4.1"
import debounce from "../../components/commom/js/untils"
export default {
    name: "userList",
    data() {
        return {
            circleUrl: require("../../assets/bg.jpg"),
            username: "",
            password: "",
            activeindex: "1-1",
            main_nav_title: { title1: "用户管理", title2: "用户列表" },
            tableData: []
        }
    },
    components: {
        main_nav
    },
    created() {
        this.getUserList()
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
        getUserList() {
            var that = this
            $.get("https://mock.yonyoucloud.com/mock/16414/userList", function(
                data
            ) {
                that.tableData = data.data
                console.log(that.tableData)
            })
        },
        swithMessage(op, type) {
            this.$message({
                showClose: true,
                message: op,
                type: type,
                duration: 1000
            })
        },
        changeStatus: function(res, row) {
            console.log(res)
            var msg = res?"启用成功":"禁用成功"
            row.status = !res
            debounce(() => {
                row.status = res
                this.swithMessage(msg, "success")
            }, 200)
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
.el-row {
    margin-bottom: 20px;
}
.el-col.el-col-6 {
    padding-left: 20px !important;
}
</style>
