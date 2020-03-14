<template>
    <div class="root">
        <div class="header">
            <div class="left">后台管理系统</div>
            <div class="right"></div>
        </div>
        <div class="main">
            <div class="left">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Admin',
        data() {
      return {
        data: [
            {
                label:'首页'
            },
            {
          label: 'Demo',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '系统管理',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
    }
</script>

<style lang="less" scoped>
    @width:220px;
    body{
        margin: 0;
        padding: 0;
    }
    .root{
        width:100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: red;
        .header{
            display: flex;
            flex-basis: 60px;
            flex-shrink: 0;
            background-color: black;
            .left{
                flex-basis:@width ;
                flex-shrink: 0;
                background-color: #17B3A3;
                text-align: center;
                line-height: 60px;
                color: aliceblue;
                font-size: 20px;
                font-weight: bold;
            }
            .right{
                flex: 1;
                background-color: #FFFFFF;
            }
        }
        .main{
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background-color: #F1F4F5;
            .left{
                flex-shrink: 0;
                flex-basis: @width;
                background-color: #263238;
                .el-tree{
                    background-color: #263238;
                    color: #8a979e;
                }
            }
            .right{
                flex: 1;
                background-color: #FFFFFF;
                margin: 15px;
            }
        }
    }
</style>