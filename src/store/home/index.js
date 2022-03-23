import { reqCategoryList } from '@/api/'
import { reqGetBannerList } from '@/api/'
// home的小仓库
const state = {
  // state中数据默认初始值不能乱写，根据返回的数据的类型
  categoryList: [],
  // 轮播图的数据
  bannerList: [],
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, getBannerList) {
    state.bannerList = getBannerList
  },
}
const actions = {
  // 通过API里面的接口函数调用，向服务器请求，获取服务器的数据
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  // 获取Banner数据
  async getBannerList({ commit }) {
    const result = await reqGetBannerList()
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
