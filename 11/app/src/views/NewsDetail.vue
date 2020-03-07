<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
    export default {
        created(){
            console.log(11111111111111)
           window.console.log(this.$route)
           window.console.log(this)
           window.console.log(this.$route)
           this.title = this.$route.params.id
        }
    }
</script>

<style scoped>

</style>