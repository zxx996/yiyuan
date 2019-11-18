import Vue from 'vue'
import Router from 'vue-router'

//功能:引入组件Exam01.vue
//1:将Exam01.vue引入当前router.js
//import Exam01 from "./components/exam/Exam01.vue"
//import Home from "./components/Home.vue"
import index from "./components/shouye/index.vue"
//import xm from "./components/1.vue"
import yslb from "./components/zhaoyiyuan/yishengliebiao.vue"
import yyzy from "./components/zhaoyiyuan/yiyuanzhuye.vue"
//import zyy from  "./components/zhaoyiyuan/zhaoyiyuan.vue"
import my from "./components/my/zhu.vue"
import xiaoxi from "./components/my/xiaoxi.vue"
//import toubu from "./components/shouye/toubu.vue"
import shouye from "./components/shouye/shouye.vue"
import time from "./components/time.vue"
import login from "./components/my/denglu.vue"
import reg from "./components/my/zhuce.vue"
import zhishi from "./components/zhishi/zhishi.vue"
import zhuce  from "./components/my/zhuce.vue"
import Home from "./components/zhaoys/Home.vue"
import Home1 from "./components/zhaoys/Home1.vue"
import Home2 from "./components/zhaoys/Home2.vue"
import Home3 from "./components/zhaoys/Home3.vue"
import Home4 from "./components/zhaoys/Home4.vue"
import Home5 from "./components/zhaoys/Home5.vue"
import Home6 from "./components/zhaoys/Home6.vue"
import Home7 from "./components/zhaoys/Home7.vue"
import Home8 from "./components/zhaoys/Home8.vue"
import Home9 from "./components/zhaoys/Home9.vue"
import Home10 from "./components/zhaoys/Home10.vue"
import Home11 from "./components/zhaoys/Home11.vue"
import zhaoyiyuan from "./components/zhaoyiyuan/Zhaoyiyuan.vue"
import Home12 from "./components/zhaoys/Home12.vue"

Vue.use(Router)
export default new Router({
  //http://127.0.0.1:3001/#/Exam02
  //path:组件路径 components组件名
  routes: [
    {path:"/Home12",name:"Home12",component:Home12},
    {path:"/zhaoyiyuan",component:zhaoyiyuan},
    {path:"/Home11",name:"Home11",component:Home11},
{path:"/Home10" ,name:"Home10",component:Home10},
{path:"/Home9",component:Home9},
{path:"/Home8",component:Home8},
{path:"/Home7",component:Home7},
{path:"/Home6",component:Home6},
{path:"/Home5",component:Home5},
{path:"/Home4",component:Home4},
{path:"/Home3",component:Home3},
{path:"/Home2",component:Home2},
{path:"/Home1",component:Home1},
{path:"/Home",component:Home},
  {path:"/zhishi",name:"zhishi",component:zhishi},
   {path:"/zhuce",component:zhuce},
    {path:"/login",component:login},
    {path:"/reg",component:reg},
    {path:"/time",component:time},
    {path:"/shouye",component:shouye},
    //{path:"/toubu",component:toubu},
    {path:"/xiaoxi",component:xiaoxi},
    {path:"/my",component:my},
   // {path:"/zyy",component:zyy},
    {path:"/yyzy",component:yyzy},
    {path:"/yslb",component:yslb},
    {path:"/index",component:index},
    //{path:"/Home",component:Home},
    //{path:"/Exam01",component:Exam01}
  ]
})
