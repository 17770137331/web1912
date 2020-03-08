<template>
  <div>
    <p>聊天</p>
    <div style="width: 300px; height: 200px; background-color: red; overflow: auto;">
      <p v-for="(item,aa) in arr" :style="{textAlign: item.name==='yj' ?'right':'left'}" :key="aa">
        <span>{{ item.name }}</span>
        <span>{{ item.nr }}</span>
        <span>{{ item.date }}</span>
      </p>
    </div>
    <input type="text" v-model="nr" @keydown.enter.ctrl.exact="ee2" @keydown.enter.exact="ee3" />
    <button @click="clickHandle">发送</button>
    <select name id v-model="dd" @click="ee">
      <option value disabled>请选择发送方式</option>
      <option value="en">enter</option>
      <option value="cen">ctrl+enter</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "chart",
  data() {
    return {
      arr: [],
      nr: "",
      dd: ""
    };
  },
  methods: {
    clickHandle() {
      this.arr.push({
        name: "yj",
        nr: this.nr,
        date: new Date().toLocaleDateString()
      });
      this.nr = "";
    },
    ee() {
      console.log(this.dd);
    },
    ee2() {
      if (this.dd == "cen") {
        this.arr.push({
          name: "yj",
          nr: this.nr,
          date: new Date().toLocaleDateString()
        });
        this.nr = "";
      }
    },
    ee3() {
      if (this.dd == "en") {
        this.arr.push({
          name: "yj",
          nr: this.nr,
          date: new Date().toLocaleDateString()
        });
        this.nr = "";
      }
    }
  }
};

</script>


<style scoped>
</style>
