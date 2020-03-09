<template>
  <div>
    <i :class="[name]"></i>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name:{
      type: String,
    }
  },
  
  
  
}
</script>


<style lang="less" scoped>

</style>
