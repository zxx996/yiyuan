// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入第三方组件库
import MinTUI from "mint-ui"
//引入mint-ui样式
import "mint-ui/lib/style.css"
// 注册vue
Vue.use(MinTUI)
//import "./font/iconfont.css"
// 引入axios模块
// 配置保存session信息
// axios注册vue
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:4000/";
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
