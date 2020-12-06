<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{
            this.main_nav_title.title1
        }}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>  -->
        <el-breadcrumb-item>{{
            this.main_nav_title.title2
        }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ["main_nav_title"],
    components: {},
    watch: {},
    created() {},
    mounted() {}
}
</script>

<style scoped>
.el-breadcrumb {
    /* padding: 0px 20px; */
    line-height: 40px !important;
    height: 40px;
    /* background: white; */
}
</style>
