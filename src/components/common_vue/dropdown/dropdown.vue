<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template v-slot:dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>管理{{ $attrs }}</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided
                    ><span @click="quit()">退出</span></el-dropdown-item
                >
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
export default {
    data() {
        return {}
    },
    components: {},
    computed: {},
    mounted() {},
    methods: {
        quit: function() {
            console.log("ssss")
            // 事件总线
            this.$bus.$emit("quit", "options")
        }
    }
}
</script>
<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: white;
    letter-spacing: 1px;
}
.el-dropdown-link i {
    font-weight: bold;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>
