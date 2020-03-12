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
     <Radio name="a">
       单选1
     </Radio>
      <Radio name="a">
       单选2
     </Radio>
     <InputNumber :number="aa" :step="step"></InputNumber>
  </div>
</template>

<script>
import Radio from "./components/Radio"
import Link1 from "./components/Link"
import InputNumber from "./components/InputNumber"

export default {
  name: 'App',
  data (){
    return{
      aa:10000,
      step:100
    }
  },
  components:{
    Link1,
    Radio,
    InputNumber,
  }
}
</script>

<style>

</style>
