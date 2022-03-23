import { reqCartList, reqDeleteCartById } from '@/api'
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList()
    if (result.code == 200) {
      commit('GETCARTLIST', result.data)
    }
  },
  // 删除购物车某个产品
  async deleteCartList({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId)
    if (result.code == 200) {
      return 'OK'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
}
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList
  },
}
const state = {
  cartList: [],
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },
}
export default {
  actions,
  mutations,
  state,
  getters,
}
