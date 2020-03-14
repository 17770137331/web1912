<template>
    <div>
        <h1 @click="jump">qq</h1>
    </div>
</template>

<script>
    export default {
        methods: {
            jump(){
                // $router对象
                // new VueRouter() 会被添加进每个组件的$router成员上
                // 1.go()前进
                // 2.back（）后退
                // 3.push（）添加一个历史记录并跳转至指定页面
                // 4.replace（）替换一个历史记录并跳转至指定页面
                window.console.log(this.$router)
                // this.$router.push("/bb/name")
                // this.$router.push({
                //     path:"/bb/name"
                // })
                // this.$router.push({
                //     //用了path就不能用params就意味着不能传参
                //     //可以用该路由的名称代替path
                //     name:"dongtailuyu",
                //     //传参
                //     params:{
                //         id:2
                //     }
                // })

                // 使用方法和push一样，就是这个会清除历史记录
                this.$router.replace({
                    name:"dongtailuyu",
                    params:{
                        dd:1
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>