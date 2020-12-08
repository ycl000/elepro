<template>
    <div>
        <main_nav :main_nav_title="main_nav_title"></main_nav>
        <el-card class="box-card">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <!--  -->
                        {{props.row.children}}
                        
                    </template>
                    </el-table-column>
                <el-table-column type="index" > </el-table-column>
                <el-table-column prop="roleName" label="角色名称">
                </el-table-column>
                <el-table-column prop="roleDesc" label="角色描述">
                </el-table-column>
                <el-table-column label="操作">
                    <el-button type="primary" icon="el-icon-edit" size="mini"
                        >编辑</el-button>
                        <el-button type="danger" icon="el-icon-delete" size="mini"
                        >删除</el-button>
                        <el-button type="warning" icon="el-icon-s-tools" size="mini">分配权限</el-button>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import main_nav from "@/components/common_vue/main_nav/main_nav.vue"
export default {
    name: "roleList",
    data() {
        return {
            circleUrl: require("../../assets/bg.jpg"),
            username: "",
            password: "",
            activeindex: "1-1",
            main_nav_title: { title1: "权限管理", title2: "角色列表" },
            tableData: []
        }
    },
    components: {
        main_nav
    },
    created() {
        this.getRoleList()
       
    },
    mounted() {
    },
    methods: {
        async getRoleList(){
             const {data: res } =  await this.$http.get("/roleList")
             this.tableData = res.data
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
