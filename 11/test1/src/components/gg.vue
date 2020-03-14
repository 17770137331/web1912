<template>
    <div>
        <h1>公共路由</h1>
    </div>
</template>

<script>
    export default {
        created() {
            //获取路由的信息
            //其中的params是用来获取动态路由信息的
            //还可以获取查询字符串query
            //created以后的钩子都能获取
            //fullpath完全路径
            //name路由的名称（路由中定义后才会有）
            //path当前路径

            //$router每个组件都能够访问
            window.console.log(this.$route)
            //结果：
            // fullPath: "/gg/1"
            // hash: ""
            // matched: [{…}]
            // meta: {}
            // name: undefined
            // params: {id: "1"}
            // path: "/gg/1"
            // query: {}
            // __proto__: Object

        },
    }
</script>

<style lang="scss" scoped>

</style>