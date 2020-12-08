<template>
    <div>
        <!-- 面包屑导航 组件 -->
        <main_nav :main_nav_title="main_nav_title"></main_nav>
        <el-card class="box-card">
            <el-row :gutter="20" >
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <el-input
                            placeholder="请输入搜索内容"
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
                        <el-button type="primary" size="medium">添加商品</el-button>
                    </div></el-col
                >
            </el-row>
            <!-- 用户列表 -->
            <el-table :data="tableData" stripe border fit style="width: 100%">
                <el-table-column type="index"> </el-table-column>
                <el-table-column prop="goods_name" min-width="600" label="商品名称" >
                </el-table-column>
                <el-table-column prop="goods_price"  label="商品价格" >
                </el-table-column>
                <el-table-column prop="goods_weight" label="商品重量/g"> </el-table-column>
                <el-table-column prop="add_time" label="添加时间">
                    <!-- <el-switch :value=""> -->
                    <!-- <template slot-scope="scope"
                        ><el-switch
                            v-model="scope.row.status"
                            @change="changeStatus(scope.row.status, scope.row)"
                            >></el-switch
                        ></template
                    > -->
                    <!-- </el-switch> -->
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <el-tooltip class="item" effect="dark" content="删除" placement="top">
                    <el-button type="danger" icon="el-icon-delete" size="mini"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                    <el-button type="primary" icon="el-icon-edit" size="mini"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="详情" placement="top">
                        <el-button type="info" icon="el-icon-document" size="mini"></el-button>
                    </el-tooltip>
                </el-table-column>
            </el-table>
            <div class="block">
                <!-- <span class="demonstration">完整功能</span> -->
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-count="pageCount"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </el-pagination>
            </div>
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
            // 头像地址
            circleUrl: require("../../assets/bg.jpg"),
            username: "",//用户名
            password: "",//密码
            activeindex: "1-1",
            main_nav_title: { title1: "商品管理", title2: "商品列表" },//面包屑标题
            tableData: [],//数据
            currentPage4:1,
            pageCount:10

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
            const {data: res } =  await this.$http.get("/productList")
            this.tableData = res.data.goods
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
.el-header {
    padding: 0px 60px;
    background-image: url(/img/bg.3cc93034.jpg);
    background-repeat: no-repeat;
    text-align: center;
    background-size: cover;
    line-height: 60px;
    color: white;
}
.block{
    padding: 10px 0;
    text-align: left;
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
.welcome_title {
    text-align: center;
    text-shadow: 3px 3px 3px gray;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;
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
