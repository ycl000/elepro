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
                <el-col :span="3"
                    ><div class="grid-content bg-purple">
                        <el-button type="primary" size="medium">添加用户</el-button>
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
                    <el-tooltip class="item" effect="dark" :enterable="false" content="删除" placement="top">
                    <el-button type="danger" icon="el-icon-delete" size="mini"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" :enterable="false" content="编辑" placement="top">
                    <el-button type="primary" icon="el-icon-edit" size="mini"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" :enterable="false" content="详情" placement="top">
                        <el-button type="info" icon="el-icon-document" size="mini"></el-button>
                    </el-tooltip>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import main_nav from "@/components/common_vue/main_nav/main_nav.vue"
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
        async getUserList(){
            const {data: res } =  await this.$http.get("/userList")
            this.tableData = res.data
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
<style scoped>
.el-row {
    margin-bottom: 20px;
}
.el-col.el-col-6 {
    padding-left: 20px !important;
}
</style>
