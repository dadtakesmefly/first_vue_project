<template>
    <div class="container">
       <div class="content" v-for="(item,index) in list" :key="index">
        <router-link to="/helloWorld"><h4>{{item.title}}</h4></router-link>
        <router-link to="/index"><p>{{item.text}}</p></router-link>
       </div>
    </div>
</template>

<script>
    export default {
        name: "articleDeatils",
        data(){
          return{
            list:[
              {
              title:"demo1",
              text:"ueudjfjsdlkfjskdfjlkdsjf"
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
