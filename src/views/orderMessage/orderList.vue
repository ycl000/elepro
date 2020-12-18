<template>
    <div>
        <!-- 面包屑导航 组件 -->
        <main-nav :main_nav_title="main_nav_title"></main-nav>
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
                        <el-button type="primary" size="medium"
                            >搜索订单</el-button
                        >
                    </div></el-col
                >
            </el-row>
            <!-- 用户列表 -->

            <el-table :data="orderList" stripe style="width: 100%">
                <el-table-column type="index"> </el-table-column>
                <el-table-column
                    prop="order_number"
                    min-width="200"
                    label="订单编号"
                >
                </el-table-column>
                <el-table-column prop="order_price" label="订单价格">
                </el-table-column>
                <el-table-column prop="pay_status" label="是否付款">
                    <template slot-scope="scope">
                        <el-tag
                            size="mini"
                            :type="scope.row.order_pay == '0' ? 'danger' : ''"
                            effect="dark"
                        >
                            {{
                                scope.row.order_pay == "0" ? "未付款" : "已付款"
                            }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="is_send" width="80" label="是否发货">
                </el-table-column>
                <el-table-column prop="pay_status" label="地址">
                </el-table-column>
                <el-table-column
                    prop="create_time"
                    min-width="200"
                    label="下单时间"
                >
                    <!-- <el-switch :value=""> -->
                    <template slot-scope="scope">
                        {{
                            scope.row.create_time
                                | formatDate("嘿哈", "sss", "dfgdf")
                        }}
                        <!-- {{new Date()}} -->
                    </template>
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
                        content="物流详情"
                        placement="top"
                    >
                        <el-button
                            type="info"
                            icon="el-icon-location"
                            size="mini"
                            @click="orderInfo"
                        ></el-button>
                    </el-tooltip>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog
            title="订单物流详情"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose"
        >
            <el-timeline :reverse="reverse">
                <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.ftime"
                    :icon="index == 0 ? icon : 'el-icon-more'"
                    size="large"
                    :type="index == 0 ? 'primary' : ''"
                >
                    {{ activity.context }}
                </el-timeline-item>
            </el-timeline>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="dialogVisible = false"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
// 驼峰用法    <mian-nav></main-nav>
import mainNav from "@/components/common_vue/main_nav/main_nav.vue"
// 格式化时间啊
import untils from "../../untils/untils"
export default {
    data() {
        return {
            orderList: [],
            main_nav_title: { title1: "订单管理", title2: "订单列表" },
            reverse: false,
            dialogVisible: false,
            activities: [],
            icon: "el-icon-location"
        }
    },
    created() {
        this.getOrderList()
    },
    components: { mainNav },

    computed: {},

    mounted() {},

    methods: {
        async getOrderList() {
            const { data: res } = await this.$http.get("/orderList")
            this.orderList = res.data.goods
            console.log(res.data.goods)
        },
        orderInfo: function() {
            this.getOrderInfo()
        },
        async getOrderInfo() {
            const { data: res } = await this.$http.get(
                "https://mock.yonyoucloud.com/mock/16414/orderInfo"
            )
            this.activities = res.data
            console.log(this.activities)
            this.dialogVisible = true
        },
        handleClose() {
            this.dialogVisible = false
        }
    },
    filters: {
        formatDate: untils.fromatData
    }
}
</script>
<style scope>
.el-col.el-col-6 {
    padding-left: 20px !important;
}
.el-dialog {
    text-align: left;
}
.el-timeline {
    margin: 0px 10px 0px 50px;
}
</style>
