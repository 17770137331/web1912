require("./style.less")
const Test = require("./App.vue")
const test2 = require("./es6/test.js")
console.log(1);
alert("123")
console.log(Test)
console.log(test2)



//导出test.js中默认导出的成员
//import test from "./es6/test" 注意不需要写.js
import test from "./es6/test"
console.log(test)

//导出test.js中按需导出的成员
import test3,{run,a,b} from "./es6/test"
console.log(test3)
console.log(run,a,b)


//如果要把全部都取出来
//把导出来的全部放在没Test里
import * as mTest from "./es6/test"
console.log(mTest)

//解决导出重名的情况 给变量加上别名
import aa,{run as ru,a as a2,b as b2,aa as aa2} from "./es6/test"
console.log(aa)
console.log(ru,a2,b2,aa2)


// import Vue from 'vue'
// import App from './App.vue'
// import "@babel/polyfill"
// new Vue({
//     render: h=>h(App)
// }).$mount("#root")

