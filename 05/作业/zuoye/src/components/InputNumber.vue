<template>
    <div>
        <a href="#" @click="jian" class="a1">-</a>
        {{ number2 }}
        <a href="#" @click="jia" class="a2">+</a>
    </div>
</template>

<script>
    export default {
        name:'InputNumber',
        props: {
           number: {
               type:Number,
               default:10
           },
           step: {
               type:Number,
               default:1
           }
        },
        data(){
            return{
                number2:this.number
            }
        },
        methods:{
            jia(){
                this.number2 = this.number2 + this.step;
            },
            jian(){
                this.number2 = this.number2 - this.step;
            }
        }
    }
</script>

<style lang="less" scoped>
    @height:40px;
    div{
        width:180px;
        display:flex;
        line-height:@height;
        border:1px solid #606266;
        border-radius: 5px;
        justify-content: space-between;
        a{
            width:50px;
            height:@height;
            text-align:center;
            background-color: #f5f7fa;
            font-size: 23px;
            text-decoration: none;
        }
        .a1{
            border-radius:5px 0 0 5px;
        }
        .a2{
            border-radius:0 5px 5px 0;
        }
    }
</style>