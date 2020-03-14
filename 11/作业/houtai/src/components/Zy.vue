<template>
    <div class="root">
        <div class="left"></div>
        <div class="right">
            <div class="context">
                <h4>管理员登录</h4>
                <el-input v-model="input1" placeholder="请输用户名"></el-input>
                <el-input v-model="input2" placeholder="请输入密码"></el-input>
                <el-input class="yzm" v-model="input3" placeholder="请输入验证码"></el-input>
                
                <el-button type="primary">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input1:'',
                input2:'',
                input3:''
            }
        },
    }
</script>

<style lang="less" scoped>
    .root{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        background-color: black;
    }
    .left{
        flex: 1;
    }
    .right{
        flex-shrink: 0;
        flex-basis: 470px;
        background-color: white;
        // display: flex;
        .context{
            margin: 170px 70px;
            // align-self: center;
            .el-input{
                margin: 0 0 20px 0;
                .el-input__inner{
                    height: 10px !important;
                }
            }
            .yzm{
                width: 160px;
            }
            .el-button{
                width: 100%;
            }
        }
    }
</style>