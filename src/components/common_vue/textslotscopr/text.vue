<template>
    <div>
        <div v-for="(item, index) in tabData" :key="index">
            <div>{{ item.name }}<slot :row="item"></slot></div>
        </div>
        <!-- tabData 一定要有  slot-scope 获得的就是slot中的属性 -->
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        tabData: {
            type: Array,
            value: [
                {
                    id: "0",
                    name: "首页",
                    isActive: true
                },
                {
                    id: "1",
                    name: "原创",
                    isActive: false
                },
                {
                    id: "2",
                    name: "热榜",
                    isActive: false
                },
                {
                    id: "3",
                    name: "关于",
                    isActive: false
                }
            ]
        }
    },
    components: {},

    computed: {},

    mounted() {},

    methods: {}
}
</script>
<style lang="scss" scoped></style>
