<template>
    <div>
        <main-nav :main_nav_title="main_nav_title"></main-nav>
        <el-card class="card">
            <el-row :gutter="50">
                <el-col :span="6">
                    <el-card class="cardItem">
                        <div class="cardItem1">
                            <div class="cardLeft">
                                <span class="el-icon-document-checked"></span>
                                <!-- <div><span>今日累计销售</span></div> -->
                            </div>
                            <div class="cardRight">
                                <div><span>今日累计销售</span></div>
                            </div>
                        </div>
                        <div class="cardItem2"><span>8000 </span></div>
                    </el-card>
                </el-col>
                <el-col :span="6"
                    ><el-card class="cardItem">
                        <div class="cardItem1">
                            <div class="cardLeft">
                                <span class="el-icon-document-checked"></span>
                                <!-- <div><span>今日累计销售</span></div> -->
                            </div>
                            <div class="cardRight">
                                <div><span>今月累计销售</span></div>
                            </div>
                        </div>
                        <div class="cardItem2"><span>8000 </span></div>
                    </el-card>
                </el-col>
                <el-col :span="6"
                    ><el-card class="cardItem">
                        <div class="cardItem1">
                            <div class="cardLeft">
                                <span class="el-icon-document-checked"></span>
                                <!-- <div><span>今日累计销售</span></div> -->
                            </div>
                            <div class="cardRight">
                                <div><span>今日累计采购</span></div>
                            </div>
                        </div>
                        <div class="cardItem2"><span>8000 </span></div>
                    </el-card></el-col
                >
                <el-col :span="6"
                    ><el-card class="cardItem">
                        <div class="cardItem1">
                            <div class="cardLeft">
                                <span class="el-icon-document-checked"></span>
                                <!-- <div><span>今日累计销售</span></div> -->
                            </div>
                            <div class="cardRight">
                                <div><span>本月累计采购</span></div>
                            </div>
                        </div>
                        <div class="cardItem2"><span>8000 </span></div>
                    </el-card></el-col
                >
            </el-row>
        </el-card>

        <el-card class="box-card">
            <!-- gutter 表示每一栏之间的距离 -->
            <el-row :gutter="20">
                <el-col :span="12">
                    <div id="monDataBar" class="monDataBar"></div>
                </el-col>
                <el-col :span="12">
                    <div id="monDataLineBar" class="monDataLineBar"></div>
                </el-col>
                <el-col :span="12">
                    <div id="monCategory" class="monCategory"></div>
                </el-col>
                <!-- <el-col :span="6"></el-col>
                <el-col :span="6"></el-col> -->
            </el-row>
        </el-card>
    </div>
</template>

<script>
// 驼峰用法    <mian-nav></main-nav>
import mainNav from "../../components/common_vue/main_nav/main_nav"
// 引入基本模板
let echarts = require("echarts/lib/echarts")
// 引入柱状图组件
require("echarts/lib/chart/bar")
require("echarts/lib/chart/line")
require("echarts/lib/chart/pie")
import "echarts/lib/component/legend"
import "echarts/lib/component/title"
import "echarts/lib/component/tooltip"
import "echarts/lib/component/graphic"
// import "echarts/l"
export default {
    data() {
        return {
            main_nav_title: { title1: "数据统计", title2: "数据报表" }
        }
    },
    created() {},
    components: { mainNav },

    computed: {},

    mounted() {
        // 柱状图初始化
        this.dataBarInit()
        this.monDataLineInit()
        this.monCInit()
    },

    methods: {
        dataBarInit: function() {
            var myBar = echarts.init(document.getElementById("monDataBar"))
            var option = {
                title: {
                    text: "客户访问来源",
                    subtext: "如下图",
                    left: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: [
                        "直接访问",
                        "邮件营销",
                        "联盟广告",
                        "视频广告",
                        "搜索引擎"
                    ]
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: [
                            { value: 335, name: "直接访问" },
                            { value: 310, name: "邮件营销" },
                            { value: 734, name: "联盟广告" },
                            { value: 435, name: "视频广告" },
                            { value: 548, name: "搜索引擎" }
                        ],
                        roseType: "radius",
                        animationType: "scale",
                        animationEasing: "elasticOut",
                        animationDelay: function() {
                            return Math.random() * 200
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            }

            myBar.setOption(option)
        },
        monDataLineInit: function() {
            var s = document.getElementsByClassName("monDataLineBar")
            console.log(s)
            var monDatabarLine = echarts.init(
                document.getElementById("monDataLineBar")
            )
            var option = {
                title: {
                    text: "2020年 销售额 销售量 业绩数据图"
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                        crossStyle: {
                            color: "#999"
                        }
                    }
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ["line", "bar"] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    data: ["销售额", "销售量", "业绩"],
                    bottom: "bottom"
                },
                xAxis: [
                    {
                        type: "category",
                        data: [
                            "1月",
                            "2月",
                            "3月",
                            "4月",
                            "5月",
                            "6月",
                            "7月",
                            "8月",
                            "9月",
                            "10月",
                            "11月",
                            "12月"
                        ],
                        axisPointer: {
                            type: "shadow"
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        name: "销售额",
                        min: 0,
                        max: 250,
                        interval: 50,
                        axisLabel: {
                            formatter: "{value} "
                        }
                    },
                    {
                        type: "value",
                        name: "销售量",
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: "{value} "
                        }
                    }
                ],
                series: [
                    {
                        name: "销售额",
                        type: "bar",
                        data: [
                            2.0,
                            4.9,
                            7.0,
                            23.2,
                            25.6,
                            76.7,
                            135.6,
                            162.2,
                            32.6,
                            20.0,
                            6.4,
                            3.3
                        ]
                    },
                    {
                        name: "销售量",
                        type: "bar",
                        data: [
                            2.6,
                            5.9,
                            9.0,
                            26.4,
                            28.7,
                            70.7,
                            175.6,
                            182.2,
                            48.7,
                            18.8,
                            6.0,
                            2.3
                        ]
                    },
                    {
                        name: "业绩",
                        type: "line",
                        yAxisIndex: 1,
                        data: [
                            2.0,
                            2.2,
                            3.3,
                            4.5,
                            6.3,
                            10.2,
                            20.3,
                            23.4,
                            23.0,
                            16.5,
                            12.0,
                            6.2
                        ]
                    }
                ]
            }
            monDatabarLine.setOption(option)
        },
        monCInit: function() {
            var monCInit = echarts.init(document.getElementById("monCategory"))
            var option = {
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                        crossStyle: {
                            color: "#999"
                        }
                    }
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: "line",
                        areaStyle: {
                            // 渐变效果
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "red" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#daa3ad" // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            }
                        }
                    }
                ]
            }
            monCInit.setOption(option)
        }
    }
}
</script>
<style scoped>
.monDataBar,
.monDataLineBar,
.monCategory {
    min-height: 400px;
}
.cardItem {
    height: 150px;
    display: flex;
    flex-direction: column;
    background: #e3e5e6;
}

.cardLeft span {
    height: 70px;
    width: 70px;
    /* border: 50%; */
    justify-content: center;
    /* border: 50%; */
    align-items: center;
    display: flex;
    color: white;
    font-size: 30px;
}
.cardLeft {
    border-radius: 50%;
    background-image: linear-gradient(45deg, #bb9c28, #95e690);
}

.cardRight {
    padding: 0 0 0 20px;
    font-size: 18px;
}
.cardItem1 {
    display: flex;
    align-items: center;
}
.cardItem2 {
    padding: 20px;
    text-align: left;
    font-size: 25px;
    font-weight: bold;
}
.card .el-col-6:nth-child(2) .cardLeft {
    background-image: linear-gradient(45deg, #bb9c28, #b154a1);
}
.card .el-col-6:nth-child(3) .cardLeft {
    background-image: linear-gradient(45deg, #94e24b, #b15470);
}
.card .el-col-6:nth-child(4) .cardLeft {
    background-image: linear-gradient(45deg, #2cb0b4, #b154a1);
}
.box-card {
    margin-top: 20px;
}
</style>
