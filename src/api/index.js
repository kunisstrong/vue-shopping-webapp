// 将API进行统一管理
import requests from './request'
import mockRequests from './mockAjax.js'
// 三级联动接口
// /api/product/getBaseCategoryList   GET   无参数
// 发请求，axios发请求返回结果Promise对象
export const reqCategoryList = () =>
  requests({ url: '/product/getBaseCategoryList', method: 'get' })
// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')
// 获取搜索模块数据 /api/list 请求方式post 需要带参数
// 当前这个接口（获取搜索模块数据），给服务器传递一个默认参数(至少是一个空对象)
export const reqGetSearchInfo = (params) =>
  requests({ url: '/list', method: 'post', data: params })
//  获取产品详情的接口   /api/item/{ skuId } 请求方式：GET
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: 'get' })
// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum } POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
// 获取购物车列表数据接口
// /api/cart/cartList  get
export const reqCartList = () =>
  requests({ url: '/cart/cartList', method: 'get' })
// 删除购物车产品接口
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
// 获取验证码
// URL /api/user/passport/sendCode/{phone} method:get
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
// 注册接口
// /api/user/passport/register POST  phone code password
export const reqUserRegister = (data) =>
  requests({ url: '/user/passport/register', data, method: 'post' })
// 登录接口
// /api/user/passport/login  post phone password
export const reqUserLogin = (data) =>
  requests({ url: '/user/passport/login', data, method: 'post' })
// 获取用户信息（需要带着用户的token向服务器要用户信息）
// URL:/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = () =>
  requests({ url: 'user/passport/auth/getUserInfo', method: 'get' })
// 退出登录
// url:/api/user/passport/logout   get
export const reqLogout = () =>
  requests({ url: '/user/passport/logout', method: 'get' })
