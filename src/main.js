import App from './App.vue'
//0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
import Vue from 'vue'
import router from './router/index.js'
import util from './util/CommonUtil.js'
import httpRequest  from './util/NetUtil.js' 
// 全局注册饿了吗无限加载框架
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
//引入饿了吗控件框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.xRequest=httpRequest;
Vue.prototype.util=util
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
Vue.config.productionTip = false
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
