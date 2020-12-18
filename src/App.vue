<template>
    <div id="app">
        <!-- <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <router-view></router-view>
    </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "app",
    components: {
        // HelloWorld
    }
}
</script>

<style >
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
    height: 100vh;
}
body {
    overflow: hidden;
    min-width: 1200px;
}
* {
    padding: 0;
    margin: 0;
}
::-webkit-scrollbar {
    width: 9px;
    /* height: 9px; */
}

::-webkit-scrollbar-track-piece {
    background-color: #ebebeb;
    -webkit-border-radius: 4px;
}
::-webkit-scrollbar-thumb:vertical {
    height: 32px;
    background-color: #b3c0d1;
    -webkit-border-radius: 4px;
}
::-webkit-scrollbar-thumb:horizontal {
    width: 32px;
    background-color: #b3c0d1;
    -webkit-border-radius: 4px;
}
</style>
