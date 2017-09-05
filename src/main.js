// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './iconfont/style.css'
import 'flex.css'   //导入flex插件
import "../static/css/common.css"

import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components/' // 加载公共组件

Vue.config.productionTip = false

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})


Vue.directive('scrollDel',{bind:function (el,binding) {
  // var getid = binding.value.id;
  var startX,endX;
  var maxRight = 75;
  var elid = el.id;
  el.addEventListener("touchstart",function (event) {
    var touch = event.targetTouches[0];
    startX = touch.clientX;
  })
  el.addEventListener("touchend",function (event) {
    var touch = event.changedTouches[0];
    endX = touch.clientX;
  })
  el.addEventListener("touchmove",function (event) {
    var _id = event.target.id
    var touch = event.changedTouches[0];
    endX = touch.clientX;
    var getx = startX - endX;
    if(getx > 30){
        el.style.right = maxRight+'px'
    }else if(getx < -30){
      el.style.right = '0px'
    }
  })
}
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
