import Vue from "vue";
// 它是一个vue插件
import VueRouter from "vue-router";

// 注册插件
Vue.use(VueRouter);



import aa from '../components/aa';
import bb from '../components/bb';
import HelloWorld from '../components/HelloWorld';
import user from '../components/user';
import name from '../components/name';
import gg from '../components/gg';
import qq from '../components/qq';
import notfound from '../components/notfound'

export default new VueRouter({
    mode: "history",
    routes: [{
            path: '/',
            component: aa,
            //嵌套路由
            //嵌套路由当前的路由是谁的children就必须在当前的组件中去添加路由容器组件<router-view/>
            children: [{
                path: 'user',
                alias: 'user.html',
                component: user
            }]
        },
        {
            path: '/bb',
            alias: '/bb.html',
            component: bb,
            children: [{
                path: 'name',
                component: name
            }]
        },
        {
            path: '/HelloWorld',
            component: HelloWorld
        },
        {
            path: '/gg/:id',
            name: 'dongtailuyu',
            component: gg
        },
        {
            path: '/qq',
            component: qq
        },
        {
            path: '/404',
            component: notfound
        },
        {
            path: '/*',
            redirect: '/404'
        }
    ]
})