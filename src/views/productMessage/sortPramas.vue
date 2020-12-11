<template>
    <div>
        <div @mouseenter="fou" class="desc">
            插槽作用于的使用 子组件要定义带有属性row并绑定数据的插槽slot
            父组件使用slot-scope="name" 以 { 属性名 : 数据 } 的形式接收
        </div>
        <TextP :tabData="tabData">
            <template slot-scope="scope">
                <div>{{ scope.row }} 嘿哈</div>
            </template>
        </TextP>
    </div>
</template>

<script>
import TextP from "../../components/common_vue/textslotscopr/text"
export default {
    data() {
        return {
            tabData: [
                {
                    id: "0",
                    name: "首页1",
                    isActive: true
                },
                {
                    id: "1",
                    name: "原创2",
                    isActive: false
                },
                {
                    id: "2",
                    name: "热榜3",
                    isActive: false
                },
                {
                    id: "3",
                    name: "关于4",
                    isActive: false
                }
            ]
        }
    },

    components: { TextP },

    computed: {},

    mounted() {},

    methods: {
        fou() {
            console.log("ceshi")
        }
    }
}
</script>
<style scoped>
.desc {
    font-weight: bold;
    padding: 30px 0px;
}
</style>
