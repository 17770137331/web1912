<template>
    <div id="app">
     <!-- <router-link to="/About">About</router-link>
     router-link用来代替a标签
     可以在hash模式和history模式中自由切换 -->
     <router-view></router-view>
     <!-- <router-link to="/">首页</router-link>
     <br>
     <router-link to="/About">About</router-link>
     <br>
     <router-link to="/News">News</router-link> -->
    </div>
</template>

<script>



export default {
  name:'app',
  components: {
    
   
  }
}
</script>

<style>

</style>
