<template>
  <div class="page">
    <div class="header">
        <h3>柠檬</h3>
        <div class="menu">
            <router-link to="/admin/user.html" class="item">用户管理</router-link>
            <router-link to="" class="item">个人中心</router-link>
        </div>
    </div>
    <div class="main">
      <div class="asider"></div>
      <div class="content">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin"
};
</script>

<style lang="less" scoped>
    @import "../../assets/style";
    .page{
        width: 100vw;
        height: 100vh;
        // background:red;
        overflow: hidden;
        // display:flex;
        // flex-direction:column;
        .flex(column);
        .header{
            flex-basis:60px;
            // background:black;
            flex-shrink:0;
            border-bottom:1px solid #ccc;
            .flex(row);
            justify-content:space-between;
            padding: 0 10px;
            .menu{
                .flex(row);
                align-items:center;
                .item{
                    margin: 0 10px;
                }
            }
        }
        .main{
            background:#ff88bb;
            flex:1;
            // display: flex;
            // flex-direction:row;
            .flex(row);
            .asider{
                flex-shrink: 0;
                flex-basis:200px;
                background:orangered;
            }
            .content{
                flex: 1;
                background:orange;
            }
        }
    }
</style>