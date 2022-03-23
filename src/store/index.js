import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import home from './home'
import search from './search'
import detail from './detail.js'
import shopcart from './shopcart.js'
import user from './user.js'
// 使用插件
Vue.use(Vuex)

// 向外暴露store类的实例
export default new Vuex.Store({
  // 实现vuex仓库模式开发储存数据
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
  },
})
