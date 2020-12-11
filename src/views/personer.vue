<template>
    <div>
        <mainNav :main_nav_title="main_nav_title"></mainNav>
        <el-card shadow="always">
            <!-- <div slot="header">
                <span>个人中心</span>
            </div> -->
            <el-row :gutter="20">
                <el-col :span="24" :offset="0">
                    <div class="t">
                        <div>
                            <el-avatar :size="100" :src="circleUrl"></el-avatar>
                        </div>
                        <div class="userName">
                            <el-tag type="primary">{{ name }}</el-tag>
                        </div>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="24" :offset="0">
                            <el-collapse
                                v-model="activeNames"
                                @change="handleChange"
                                accordion
                            >
                                <el-collapse-item
                                    title="效率 Efficiency"
                                    name="3"
                                >
                                    <div>
                                        简化流程：设计简洁直观的操作流程；
                                    </div>
                                    <div>
                                        清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                                    </div>
                                    <div>
                                        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item
                                    title="可控 Controllability"
                                    name="4"
                                >
                                    <div>
                                        用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                                    </div>
                                    <div>
                                        结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-col>
                        <el-col :span="12" :offset="0"></el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="0">
                            <div class="infoT">
                                <div>
                                    <el-avatar
                                        :size="100"
                                        :src="circleUrl"
                                    ></el-avatar>
                                </div>

                                <div class="userName">
                                    <el-tag type="primary">{{ name }}</el-tag>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">标签</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">个签</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">留言</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12" :offset="0">
                            <div class="infoT">
                                <div>
                                    <el-avatar
                                        :size="100"
                                        :src="circleUrl"
                                    ></el-avatar>
                                </div>

                                <div class="userName">
                                    <el-tag type="primary">{{ name }}</el-tag>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">来电少</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">你说啥</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">来啊</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="0">
                            <div class="infoT">
                                <div>
                                    <el-avatar
                                        :size="100"
                                        :src="circleUrl"
                                    ></el-avatar>
                                </div>

                                <div class="userName">
                                    <el-tag type="primary">{{ name }}</el-tag>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">标签</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">个签</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">留言</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12" :offset="0">
                            <div class="infoT">
                                <div>
                                    <el-avatar
                                        :size="100"
                                        :src="circleUrl"
                                    ></el-avatar>
                                </div>

                                <div class="userName">
                                    <el-tag type="primary">{{ name }}</el-tag>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">来电少</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">你说啥</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                                <div class="infos">
                                    <el-tag type="primary">来啊</el-tag
                                    ><span>哇哈哈哈哈哈</span>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import mainNav from "./../components/common_vue/main_nav/main_nav"
export default {
    data() {
        return {
            main_nav_title: { title1: "个人中心" },
            circleUrl: require("../assets/bg.jpg"),
            name: "",
            activeNames: ["1"]
        }
    },

    components: { mainNav },
    created() {
        this.getCookie()
    },
    computed: {},

    mounted() {},

    methods: {
        getCookie: function() {
            console.log()
            var username = this.get_Cookie()
            this.name = username
            return username
        },
        handleChange: function() {
            console.log()
        }
    }
}
</script>
<style scoped>
.t {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("../assets/bg.jpg");
    background-repeat: no-repeat;
}
.t span:not(:first-child) {
    padding: 0px 10px;
}
.userInfo {
    height: 1000px;
}
.userName .el-tag {
    margin: 10px 0;
    letter-spacing: 3px;
    font-size: 18px;
}
.infoT {
    margin: 30px 0;
    border-top: 5px solid #48789a;
    padding: 10px 0;
    box-shadow: 0px 6px 10px #48789a;
}
.infos {
    margin: 10px 0;
}
.infos span {
    padding: 0px 10px;
}
</style>
