import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import News from "../views/News";
import admin from "../views/admin";
import User from "../views/admin/User"
import NewsDetail from "../views/NewsDetail"

Vue.use(VueRouter);
export default new VueRouter({
    mode:"hash",
    routes:[
        {
            path: "/",
            //别名
            alias:"/index.html",
            component: Home
        },
        {
            path: "/About.html",
            component: About
        },
        {
            path: "/News.html",
            alias: "/News",
            component: News
        },
        {
            path:"/admin",
            component:admin,
            //嵌套路由
            children:[
                {
                    path: "user.html",
                    alias:"user",
                    component:User
                },
                {
                    path: "user.html"
                },
            ]
        },
        {
            path: "/news/:id",
            component:NewsDetail
        }
    ]
})