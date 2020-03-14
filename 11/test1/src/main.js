import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

//路由拦截
router.beforeEach((to, from, next) => {
    //form从哪里来
    //to到哪里去
    //next()是否放行
    //next({path:"/404.htnl"})也可做跳转
    window.console.log(form, to, next)
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')