import Vue from "vue";
// 它是一个vue插件
import VueRouter from "vue-router";

// 注册插件
Vue.use(VueRouter);

import Admin from "../src/components/Admin"
import Zy from "../src/components/Zy"
export default new VueRouter({
    mode: "history",
    routes: [{
            path: '/',
            component: Zy
        },
        {
            path: '/Admin',
            component: Admin
        }
    ]
})