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
                        {{ scope.row.create_time | formatDate }}
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
                        content="订单详情"
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
    </div>
</template>

<script>
import mainNav from "@/components/common_vue/main_nav/main_nav.vue"
export default {
    data() {
        return {
            orderList: [],
            main_nav_title: { title1: "订单管理", title2: "订单列表" }
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
        }
    },
    filters: {
        formatDate: function(value) {
            let date = new Date(value)
            let y = date.getFullYear()
            let MM = date.getMonth() + 1
            MM = MM < 10 ? "0" + MM : MM
            let d = date.getDate()
            d = d < 10 ? "0" + d : d
            let h = date.getHours()
            h = h < 10 ? "0" + h : h
            let m = date.getMinutes()
            m = m < 10 ? "0" + m : m
            let s = date.getSeconds()
            s = s < 10 ? "0" + s : s
            return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s
        }
    }
}
</script>
<style scoped>
.el-col.el-col-6 {
    padding-left: 20px !important;
}
</style>
