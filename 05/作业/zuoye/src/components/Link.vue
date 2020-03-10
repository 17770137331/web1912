<template>
  <div class="div">
    <a :href="[href]" :class="[type,{'noundeline':underline=='false'}]">
      <slot name="icon-left"></slot>
      <slot></slot>
      <slot name="icon-right"></slot>
    </a> 
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: {
    type: {
      type: String,
      default:"default"
    },
    underline: {
      type: String,
      default:"true"
    },
    href:{
      type: String,
      defaule:"#"
    }
  },
  data() {
    return{

    }
  }
  
}
</script>

<style lang="less" scoped>
  .noundeline{
    text-decoration: none;
  }
  div{
    display:inline-block;
    a{
      color:#606266;
    }
  }
  .default{
    color: #606266;
  }
  .info {
    color: #5bc0de;
  }
  .success{
    color: #5cb85c;
  }
  .primary{
    color: #337ab7;
  }
  .warning{
    color: #f0ad4e;
  }
  .danger{
    color: #d9534f;
  }
</style>
