<template>
    <div>
        <button :class="[colorname]" class="btn">
            <slot/>
        </button>
    </div>
</template>

<script>
    export default {
        name:'Button',
        props:{
            color:{
                type:String,
            }
        },
        watch:{
            color(){
                this.colorname = 'btn-' + this.color;
            }
        },
        data() {
            return{
                colorname:''
            }
        }
    }
</script>

<style scoped>

</style>