<template>
    <div class="container">
        <div class="slogan"><img src="../../static/images/home_top.png" alt=""></div>
        <div class="line"></div>
        <div class="content">
          <div class="test-section">
            <div class="test-one"><img src="../../static/images/home_test1.png" alt=""></div>
            <div class="test-two-box">
              <div class="test-two-left"><img src="../../static/images/home_test2.png" alt=""></div>
              <div class="test-three-right"><img src="../../static/images/home_test3.png" alt=""></div>
            </div>
          </div>
          <div class="article">
            <div class="article-template"  @click="changeRed(index)" :class='{active:item.sel == true}'  v-for="(item,index) in article" :key="index">
              <div class="tetx-info">
                <div>{{item.title}}</div>
                <div class="tetx-info-num">
                  <div>{{item.time}}</div>
                  <div>{{item.readcount}}</div>
                </div>
              </div>
              <!--路由跳转模式 类似a标签-->
              <!--<router-link to="/articleDeatils"><div class="img-info"><img class="article-pic" :src="item.img" alt=""></div></router-link>-->
              <!--js方法跳转  params 传递参数  类似 post -->
              <!--<div class="img-info" @click="paramsFunc"><img class="article-pic" :src="item.img" alt=""></div>-->
              <!--js方法跳转  query 传递参数  类似 get -->
              <div class="img-info" @click="queryFunc"><img class="article-pic" :src="item.img" alt=""></div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            article:[
              {
                "title":"demo1",
                "time":"2018-01-02",
                "readcount":"12.8k",
                "img":"http://oibl5dyji.bkt.clouddn.com/1.jpg",
                "sel":false
              },
              {
                "title":"demo2",
                "time":"2018-02-03",
                "readcount":"18.8k",
                "img":"http://oibl5dyji.bkt.clouddn.com/1.jpg",
                "sel":false
              }
            ]
          }

        },
        created:function(){
          // 初始化数据
        },
        mounted:function(){
          //ajax
        },
        computed:{
          //计算属性
        },
        watch:{
          // 监听 属性变化 触发方法
        },
        methods:{
          changeRed:function (index) {
              var that = this
              console.log(index)
              that.article.forEach((val,i) => {
                console.log(val,i)
                if(index == i){
                    val.sel = true
                }
                else{
                   val.sel = false
                }
              })
          },
          paramsFunc(){
            this.$router.push({name: 'articleDeatils',params:{ id:'1'}});
          },
          queryFunc(){
            this.$router.push({name: 'articleDeatils',query:{ id:'1'}});
          }
        }

    }
</script>


<style lang="scss"  scoped>
  html,body{
    width: 100%;
  }
   .container{
    width: 100%;
   }
  .slogan img{
    width: 100%;
  }
  .line{
    height: 3px;
    background-color: #e0e0e0;
  }
  .content{
    padding: 0 0.2rem;
  }
  .test-section{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 0.3rem;
  }
  .test-one{
    width: 6.9rem;
    height: 2.7rem;
    margin: 0 auto;
  }
  .test-one img{
    width: 6.9rem;
    height: 2.7rem;
    margin: 0 auto;
  }
  .test-two-box{
    width: 6.9rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .test-two-box img{
    width: 3.3rem;
    height: 2.2rem;
  }
  .article{

  }
  .article .article-template:nth-last-child(1){
    border-bottom: 2px solid #e0e0e0;
  }
  .article-template{
    display: flex;
    width: 6.9rem;
    height: 1.28rem;
    justify-content: space-between;
    border-top: 2px solid #e0e0e0;
    padding: 0.5rem 0;
    box-sizing: content-box;
  }
  .article-pic{
    width: 1.28rem;
    height: 1.28rem;
  }
  .tetx-info{
    width: 5.2rem;
    text-align: left;
    font-size: 0.44rem;
    padding-left: 0.05rem;
  }
  .tetx-info-num{
    display: flex;
    width: 5.2rem;
    font-size: 0.22rem;
    margin-top: 0.5rem;
    justify-content: space-between;
  }
  .active{
     color:red;
  }



</style>
