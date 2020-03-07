<template>
   <div class="test" @click="fn">
       Test
   </div>
</template>
<script>
export default {
    methods:{
        mounted(){
            this.run()
        },
        fn(){

        },
        async test(){
            return 100;
        },
        async run() {
            const data = await this.test();
            console.log(data);
            console.log(10000000000000000000)
        }
    }
}
</script>
<style lang="sass">

</style>