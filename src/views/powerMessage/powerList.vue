<template>
    <div>
        <main_nav :main_nav_title="main_nav_title"></main_nav>
        <el-card class="box-card">
            <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="authName" label="名称">
                </el-table-column>
                <el-table-column prop="path" label="路径">
                </el-table-column>
                <el-table-column prop="level" label="等级">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.level == '0'">一级</el-tag>
                        <el-tag
                            type="success"
                            v-if="scope.row.level == '1'"
                            >二级</el-tag
                        >
                        <el-tag type="info" v-if="scope.row.level == '2'"
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
        async getPowerList() {
            const {data: res } =  await this.$http.get("/powerList")
                this.tableData = res.data
        }
    }
}
</script>
<style scoped>
</style>
