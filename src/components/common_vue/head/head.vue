<template>
    <div>
        <div class="header_left">某某 服务管理平台</div>
        <div class="header_right">
            <span class="welcome">欢迎您 {{ this.username }}{{ $attrs }}</span>
            <el-avatar :src="circleUrl"> </el-avatar>
            <button class="quit">
                <myDropdown v-bind="$attrs"></myDropdown>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    inheritAttrs: false,
    // $attrs  如果已经使用props接收全部   则$attrs为空   如果props接收部分  则$attrs 存在另一部分数据   如果不用props   则￥attrs 是全部数据
    //
    props: ["circleUrl", "username"],

    components: {
        myDropdown: () => import("../dropdown/dropdown.vue")
    },

    computed: {},

    mounted() {},

    methods: {
        // quit:function(){
        //   this.$emit("quit","options")
        //   console.log("ssss")
        // }
    }
}
</script>
<style scoped>
.header_left {
    float: left;
    margin-left: 100px;
    text-align: center;
    text-shadow: 3px 3px 3px gray;
    font-size: 18px;
    font-weight: bold;
    font-style: oblique;
    /* font-family: cursive; */
    letter-spacing: 2px;
}
.quit {
    border: none;
    background: none;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
}
.quit i {
    font-weight: bold;
}
.welcome {
    padding: 0px 10px;
    font-size: 14px;
    font-weight: bold;
}
.header_right {
    float: right;
}
.el-avatar {
    vertical-align: middle;
    text-align: right;
}
.el-header {
    width: 100%;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
</style>
