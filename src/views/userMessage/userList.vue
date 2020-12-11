<template>
    <div>
        <!-- 面包屑导航 组件 -->
        <mainNav :main_nav_title="main_nav_title"></mainNav>
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
                        <el-button type="primary" @click="addUser" size="medium"
                            >添加用户</el-button
                        >
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
                    <el-tooltip
                        class="item"
                        effect="dark"
                        :enterable="false"
                        content="删除"
                        placement="top"
                    >
                        <el-button
                            type="danger"
                            icon="el-icon-delete"
                            size="mini"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip
                        class="item"
                        effect="dark"
                        :enterable="false"
                        content="编辑"
                        placement="top"
                    >
                        <el-button
                            type="primary"
                            icon="el-icon-edit"
                            size="mini"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip
                        class="item"
                        effect="dark"
                        :enterable="false"
                        content="详情"
                        placement="top"
                    >
                        <el-button
                            type="info"
                            icon="el-icon-document"
                            size="mini"
                        ></el-button>
                    </el-tooltip>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog
            title="添加用户"
            width="70%"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
        >
            <el-form
                :label-position="labelPosition"
                label-width="80px"
                :rules="rules"
                ref="ruleForm"
                :model="formLabelAlign"
            >
                <el-form-item label="用户名" prop="name">
                    <el-input
                        v-model="formLabelAlign.name"
                        placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        v-model="formLabelAlign.password"
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input
                        v-model="formLabelAlign.email"
                        placeholder="请输入邮箱"
                    ></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input
                        v-model="formLabelAlign.phone"
                        placeholder="请输入电话"
                    ></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
import mainNav from "@/components/common_vue/main_nav/main_nav.vue"
import debounce from "../../components/commom/js/untils"
export default {
    name: "userList",
    data() {
        // var checkEmail = (rule,value)=>{
        //         console.log(rule,value)
        //       };
        var checkPhone = (rule, value, callback) => {
            // 无论验证正确与否  都要调用callback  不然验证或者提交无响应
            var re = /(^1)[3|5|7|8|9][0-9]{9}/
            if (!re.test(value)) {
                return callback(new Error("请输入正确的电话号码"))
            }
            return callback()
        }
        return {
            circleUrl: require("../../assets/bg.jpg"),
            username: "",
            password: "",
            activeindex: "1-1",
            main_nav_title: { title1: "用户管理", title2: "用户列表" },
            tableData: [],
            dialogVisible: false,
            labelPosition: "right",
            formLabelAlign: {
                name: "",
                password: "",
                email: "",
                phone: ""
            },

            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 5,
                        message: "长度在 3 到 5 个字符",
                        trigger: ["blur", "change"]
                    }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        min: 6,
                        max: 11,
                        message: "长度在 6 到 11 个字符",
                        trigger: ["blur", "change"]
                    }
                ],
                email: [
                    { required: true, message: "请输入邮箱", trigger: "blur" },
                    {
                        type: "email",
                        trigger: ["blur", "change"],
                        message: "请输入正确的邮箱"
                    }
                ],
                phone: [
                    {
                        validator: checkPhone,
                        trigger: ["blur", "change"],
                        required: true
                    }
                ]
            }
        }
    },
    components: {
        mainNav
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
        async getUserList() {
            const { data: res } = await this.$http.get("/userList")
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
            var msg = res ? "启用成功" : "禁用成功"
            row.status = !res
            debounce(() => {
                row.status = res
                this.swithMessage(msg, "success")
            }, 200)
        },
        addUser() {
            console.log("sss")
            this.dialogVisible = true
            // this.getUserList()
        },
        handleClose() {
            this.dialogVisible = false
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                console.log(valid)
                if (!valid) {
                    //  this.$message('添加失败  请重新填写信息');
                    return false
                }
                alert("submit!")
                this.dialogVisible = false
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        }
    },
    beforeRouteEnter(to, from, next) {
        // ...当组件被缓存时  新添加的用户不会显示  没有请求新的数据  可以再路由进入前 在请求获取数据
        // 好像也能在离开前更新
        next(vm => {
            vm.getUserList()
        })
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
.el-dialog__wrapper {
    text-align: left;
}
</style>
