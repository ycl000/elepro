<template>
    <div>
        <main-nav :main_nav_title="main_nav_title"></main-nav>
        <el-card class="box-card">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <!-- <el-tag
                        v-for="tag in props.row.children"
                        :key="tag.authName"
                        closable
                        type="success">
                        {{tag.authName}}


                        </el-tag> -->
                        <!-- <el-row type="flex" class="row-bg">  -->
                        <el-row
                            type="flex"
                            :class="[
                                index == '0' ? 'bdtop' : '',
                                'row-bg bdtottom bdright bdlrft'
                            ]"
                            :key="index"
                            v-for="(tag, index) in props.row.children"
                        >
                            <el-col :span="5" class="bdright">
                                <el-row type="flex" class="row-bg">
                                    <el-tag
                                        @close="handleClose(index)"
                                        closable
                                        effect="dark"
                                        type=""
                                    >
                                        {{ tag.authName }}
                                    </el-tag>
                                    <i class="el-icon-caret-right"></i>
                                </el-row>
                            </el-col>
                            <el-col :span="19">
                                <el-row
                                    type="flex"
                                    :class="[
                                        index != tag.children.length - 1
                                            ? 'bdtottom'
                                            : '',
                                        'row-bg'
                                    ]"
                                    :key="index"
                                    v-for="(tag2, index) in tag.children"
                                >
                                    <el-col :span="6" class="bdright">
                                        <el-tag
                                            @close="handleClose(index)"
                                            closable
                                            effect="dark"
                                            type="success"
                                        >
                                            {{ tag2.authName }}
                                        </el-tag>
                                        <i class="el-icon-caret-right"></i>
                                    </el-col>
                                    <el-col :span="18" class="tag_col">
                                        <!-- <el-row type="flex" class="row-bg" > -->
                                        <el-tag
                                            class="tag_level3"
                                            :key="index"
                                            v-for="(tag3,
                                            index) in tag2.children"
                                            closable
                                            @close="handleClose(index)"
                                            effect="dark"
                                            type="warning"
                                        >
                                            {{ tag3.authName }}
                                        </el-tag>
                                        <!-- </el-row> -->
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <!-- </el-row> -->
                        <!-- </el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        </el-row> -->
                    </template>
                </el-table-column>
                <el-table-column type="index"> </el-table-column>
                <el-table-column prop="roleName" label="角色名称">
                </el-table-column>
                <el-table-column prop="roleDesc" label="角色描述">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            type="primary"
                            icon="el-icon-edit"
                            size="mini"
                            >编辑</el-button
                        >
                        <el-button
                            type="danger"
                            icon="el-icon-delete"
                            size="mini"
                            >删除</el-button
                        >
                        <el-button
                            type="warning"
                            @click="powerClick(scope.row)"
                            icon="el-icon-s-tools"
                            size="mini"
                            >分配权限</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog
            title="分配权限"
            :visible.sync="dialogVisible"
            width="40%"
            @close="closeDialog"
            class="dialog_left"
        >
            <el-tree
                ref="tree"
                :data="powerTree"
                :props="props"
                node-key="id"
                show-checkbox
                default-expand-all
                :default-checked-keys="checkedKeys"
                @check-change="handleCheckChange"
            >
            </el-tree>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="mini"
                    >取 消</el-button
                >
                <el-button
                    type="primary"
                    @click="dialogVisible = false"
                    size="mini"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
import mainNav from "@/components/common_vue/main_nav/main_nav.vue"
export default {
    name: "roleList",
    data() {
        return {
            circleUrl: require("../../assets/bg.jpg"),
            username: "",
            password: "",
            activeindex: "1-1",
            main_nav_title: { title1: "权限管理", title2: "角色列表" },
            tableData: [],
            dialogVisible: false,
            props: {
                label: "authName",
                children: "children"
            },
            powerTree: [],
            checkedKeys: [] //默认选择权限的数组
        }
    },
    components: {
        mainNav
    },
    created() {
        this.getRoleList()
        this.getPowerTree()
    },
    mounted() {},
    methods: {
        async getRoleList() {
            const { data: res } = await this.$http.get("/roleList")
            this.tableData = res.data
            //  console.log()
        },
        async getPowerTree() {
            const { data: res } = await this.$http.get("/powerTree")
            this.powerTree = res.data
            console.log(res.data)
        },
        handleClose(e) {
            console.log(e)
            this.$alert("是否确定删除该权限", "删除权限", {
                confirmButtonText: "确定",
                callback: () => {
                    this.$message({
                        type: "info",
                        message: "测试删除 尚未操作数据库" //`${action}`
                    })
                }
            })
        },
        closeDialog() {
            // 关闭dialog分配权限窗口时  取消选中的权限  不然权限会一直叠加
            this.$refs.tree.setCheckedKeys([])
            console.log("关闭", this.checkedKeys)
        },
        handleCheckChange() {},
        powerClick(data) {
            this.checkedKeys = []
            this.getRolepower(data, this.checkedKeys)
            this.$nextTick(function() {
                this.dialogVisible = true
                // console.log(this.$refs.tree)
                // this.$refs.tree.setCheckedNodes(this.checkedKeys)
            })
        },
        //角色权限获取
        getRolepower(data, arr) {
            var that = this
            if (!data.children) {
                arr.push(data.id)
                return
            }
            data.children.forEach(item => {
                that.getRolepower(item, arr)
            })
        }
    }
}
</script>
<style scoped>
.dialog_left {
    text-align: left;
}

.tag_level3 {
    margin: 10px;
    text-align: left;
}
.tag_col {
    text-align: left;
}
.bdtottom {
    border-bottom: 1px solid #ececec;
}
.bdtop {
    border-top: 1px solid #ececec;
}
.bdright {
    border-right: 1px solid #ececec;
}
.bdlrft {
    border-left: 1px solid #ececec;
}
.el-col-5,
.el-col-5 > .el-row,
.el-col-6 {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
