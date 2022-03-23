import Vue from 'vue'
import App from './App.vue'
// 引入三级组件
import TypeNav from '@/components/TypeNav/'
// 引入分页器组件
import Pagination from '@/components/Pagination/'
// 引入router配置文件
import router from '@/router/index.js'
// 引入Vuex仓库
import store from '@/store/'
// 引入mock模拟
import '@/mock/mockServe.js'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 将三级组件设置为全局组件
// 第一个参数是组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // 注册router
  router,
  // 注册仓库
  store,
}).$mount('#app')
