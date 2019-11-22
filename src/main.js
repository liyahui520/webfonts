// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import {Spin} from 'view-design'
import 'view-design/dist/styles/iview.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js' 
Vue.use(ViewUI);
Vue.prototype.$Spin = ViewUI.Spin;
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  ViewUI.Spin.show();
    ViewUI.LoadingBar.start(); 
  next();   //一定要加next();才会路由跳转
});

router.afterEach(route => {
  ViewUI.LoadingBar.finish(); 
  ViewUI.Spin.hide();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
