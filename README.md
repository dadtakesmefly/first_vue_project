# my-first-vue-demo

> vue 单页面应用

 vue全局安装

 ```
 npm install -g  vue
 ```
 vue—cli脚手架全局安装

 ```
 npm install -g vue-cli
 ```
 初始化vue
 
![img](https://img-blog.csdn.net/20171219140721958)

[传送门，完整版本](https://blog.csdn.net/m0_37479246/article/details/78836686)




### 单页面渲染所有组件，通过路由去控制显示与隐藏
### 组件之间跳转，template里面通过

     <router-link to="/index" >< /router-link>进行跳转 类似a标签
        
### js里面跳转 

     <button @click = "func">跳转</button>
     
     export default{
              methods:{
                  func (){
                      this.$router.push({name: 'index',query:{ id:'1'}});   //传递参数 类似get 拼接在路由后面
                  }，
                  func (){
                      this.$router.push({name: 'index',params:{ id:'1'}});   //传递参数 类似post
                  }
              }
        }

### 路由配置在 router/index.js

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


> 第一次玩vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
