// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
// import store from '@/store'
// params接收相同的参数会报错
// 解决办法
// 先把Vue-router原型对象的push，先保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写push与replace
// 第一个参数：告诉原来push方法，都可以修改上下文一次
// call与apply区别
// 相同点：都可以调用函数一次，都可以修改上下文一次
// 不同点：call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(
            this,
            location,
            () => {},
            () => {}
        )
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(
            this,
            location,
            () => {},
            () => {}
        )
    }
}

// 使用插件
Vue.use(VueRouter)

// 配置路由
// 向外暴露VueRouter类的实例
let router = new VueRouter({
    // 配置路由
    routes,
    scrollBehavior() {
        // 始终滚动到顶部
        return { y: 0 }
    },
})
export default router
