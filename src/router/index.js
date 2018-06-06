import Vue from 'vue'
import index from '@/components/index'  //引入组件
import articleDeatils from '@/components/articleDeatils' //引入组件
import HelloWorld from '@/components/HelloWorld' //引入组件


import VueRouter from 'vue-router'  //引入 vue-router 组件

Vue.use(VueRouter)

//配置路由
export default new VueRouter({
  // mode:"history", 将 # 变成 /
  routes: [
    {
      path: '/',   //默认的首页
      name: 'index',
      component: index
    },
    {
      path: '/index',  //首页路由 一定要配 不然跳不回来
      name: 'index',
      component: index
    },
    {
      path: '/articleDeatils', //详情路由
      name: 'articleDeatils',
      component: articleDeatils
    },
    {
      path: '/HelloWorld',  //helloworld 路由
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
