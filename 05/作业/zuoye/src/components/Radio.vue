<template>
    <div>
        <input type="radio" :name="[name]"/>
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name:'Radio',
        props:{
            name:String
        }
    }
</script>

<style scoped>
    div{
        display: inline-block;
    }
</style>