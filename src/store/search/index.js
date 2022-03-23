import { reqGetSearchInfo } from '@/api/'
// search的小仓库
const state = {
  searchList: {},
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  },
}
const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params)
    if (result.code == 200) {
      commit('GETSEARCHLIST', result.data)
    }
  },
}
// 项目中的getters可以简化数据
// 使我们以后使用数据方法
const getters = {
  attrsList(state) {
    return state.searchList.attrsList
  },
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
