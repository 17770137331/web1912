//es6的导出语法

//export default默认导出
//export default后面可以跟任何东西
export default {name:"xxx",age:100};
// export default function(){

// }
// export default name=100;


//按需导出
//需要导出谁就在你谁前面加一个export
export function run(){

}
export var aa={
    cc:100,
    e:1
}
//注意导出变量的时候要这样导出
export const a =1;
export var b=2;

//把lib.js的成员合并到当前js导出
export * from "./lib"
//合并lib.js里面的部分成员
// export { sum } from "./lib"