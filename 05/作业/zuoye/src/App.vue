<template>
  <div>
     <Link1 type="info" underline="false" href="https://www.baidu.com/">
        <template v-slot:icon-left>
          <span class="glyphicon glyphicon-search"></span>
        </template>
        你好呀
        <template v-slot:icon-right>
          <span class="glyphicon glyphicon-heart"></span>
        </template>
     </Link1>
     <Link1 type="danger" underline href>你好呀</Link1>
     <Link1 type="" href="1111">你好呀</Link1>
  </div>
</template>

<script>

import Link1 from "./components/Link"
export default {
  name: 'App',
  components:{
    Link1,
  }
}
</script>

<style>

</style>
