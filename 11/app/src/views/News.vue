<template>
    <div>
        <Navigator></Navigator>
        <h1>News</h1>
        <ul>
            <li v-for="item in news" :key="item">
                <router-link :to="'/news/'+item.id">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Navigator from "../components/Navigator";
    export default {
       data() {
            return {
                news: [
                    {
                        id: '1',
                        title: "哈哈是的"
                    },
                    {  
                        id: '2',
                        title: "您好的发生"
                    },
                     {  
                        id: '3',
                        title: "返回"
                    },
                     {  
                        id: '4',
                        title: "前进"
                    },
                     {  
                        id: '5',
                        title: "跳转"
                    }

                ]
            }
        },
        News:'News',
        components: {
            Navigator
        }
    }
</script>

<style lang="scss" scoped>

</style>