<template>
    <el-aside width="200px">
        <el-row class="tac">
            <el-col :span="24">
                <!-- <h5>自定义颜色</h5> -->
                <el-menu
                    :default-active="this.$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#39b0ea"
                    router
                    collapse-transition
                >
                    <el-submenu
                        v-for="(item, index) in leftMenuTitle"
                        :key="index"
                        :index="index + ''"
                    >
                        <template v-slot:title>
                            <i :class="leftIcon[index]"></i>
                            <span>{{ item.authName }}</span>
                        </template>
                        <el-menu-item
                            v-for="(item1, index2) in item.children"
                            :key="index2"
                            :index="item1.path"
                            ><i class="el-icon-location"></i
                            >{{ item1.authName }}</el-menu-item
                        >
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </el-aside>
</template>
<script>
import $ from "../../../assets/jquery-3.4.1"
export default {
    data() {
        return {
            leftMenuTitle: [],
            leftIcon: [
                "el-icon-user",
                "el-icon-s-operation",
                "el-icon-s-goods",
                "el-icon-s-order",
                "el-icon-s-data"
            ]
        }
    },
    created() {},
    mounted() {
        this.getLeftMenu()
        console.log(this.leftMenuTitle)
        // this.getLeftMenu();
    },
    props: ["activeindex"],
    components: {},
    computed: {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
        getLeftMenu() {
            // console.log(this.$)
            var that = this
            $.get("https://mock.yonyoucloud.com/mock/16414/userLists", function(
                data
            ) {
                that.leftMenuTitle = data.data
                console.log(that.leftMenuTitle)
            })
        }
    }
}
</script>
<style scoped>
.tac {
    margin-bottom: 60px;
    text-align: left;
}
.el-menu-item.is-active {
    background: rgb(29 55 60) !important;
}
.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
    overflow-y: auto;
    height: 100%;
}
.el-menu {
    border-right: 0;
}

.el-menu-item {
    text-align: center;
}
/* 设置滚动条隐藏 */
.el-aside::-webkit-scrollbar {
    width: 2px; /* 对纵向滚动条起作用*/
    height: 2px; /* 对横向滚动条起作用*/
    background: gray;
    display: none; /* 不显示滚动条 */
    background: #545c64;
}
</style>
