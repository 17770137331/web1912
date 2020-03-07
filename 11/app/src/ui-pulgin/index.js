//循环组件插件
import Button from "./Button.vue";
import icon from "./icon";

const components = {
    Button,
    icon
}

export default {
    install(Vue,options){
        console.log("我是option:"+options)
        Object.keys(components).forEach((key)=>{
            const _thisComponent = components[key];
            Vue.component(_thisComponent.name,_thisComponent);
        })
    }
}