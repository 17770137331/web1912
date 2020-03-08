<template>
    <div>
        邮箱：<input type="text" v-model="da" @keydown.up.down.enter.prevent="fn" />
        <ul>
            <li @click="fn2(aa)" :class="[jg==aa?a:'bb']" v-for="(item,aa) in shuliang2" :key="aa">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"email",
        data(){
           return{
               da:'',
               shuliang:['@qq.com', "@163.com", "@gmail.com", "@126.com"],
               shuliang2:[],
               jg:0,
               a:'a'
           }
        },
        methods: {
            fn(){               
                if(event.code == 'ArrowDown'){
                    this.jg<(this.shuliang.length-1)?this.jg++:this.jg;
                }
                else if(event.code == 'ArrowUp'){
                    this.jg>0?this.jg--:this.jg;
                }
                else if(event.code == 'Enter'){
                    this.da = this.shuliang2[this.jg];
                    this.$nextTick(()=>{
                        this.shuliang2=[];
                    })
               }
            },

            fn2(aa){
                this.da = this.shuliang2[aa];
                this.$nextTick(()=>{
                    this.shuliang2=[];
                })
            }
        },
        watch:{
            da() {
                if(/^\w+@[a-z0-9-]+\.[a-z]+$/g.test(this.da)||this.da==''){
                     this.$nextTick(()=>{
                        this.shuliang2=[];
                    })
                }
                this.shuliang2 = this.shuliang.map(value=>{
                    return this.da + value;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    input{
        width:200px;
    }

    ul{
        margin: 0;
        padding: 0;
        li{
            width: 202px;
            margin-left:48px;
            list-style-type: none;
            border: 1px solid #ccc;
        }
    }

    .a{
        background-color: red;
    }
</style>