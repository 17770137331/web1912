<template>
  <div id="app">
    <router-link to="/">首页</router-link><br>
    <router-link to="/HelloWorld">HelloWorld</router-link><br>
    <router-link to="/bb">bb</router-link><br>
    <router-link to="/qq">qq</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>
</style>
