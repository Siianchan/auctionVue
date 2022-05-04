// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      //在请求头加入token
      config.headers.token = localStorage.getItem('token');
    }
    return config;
  });
axios.interceptors.response.use(
  response => {
    // 定时刷新access-token
    if (response.data.resultCode == '-2') {
      localStorage.removeItem("token");
      this.userInfo={};
      alert("账号验证已过期，请退出后重新登陆");
      //token过期
    }
    return response
  });

/* eslint-disable no-new */
new Vue({
  created() {
  },
  data() {
    return {
      islogin: false,
      userInfo: {},
    };
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
