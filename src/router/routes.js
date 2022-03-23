// 路由配置信息
// 引入路由组件
import Detail from '@/pages/Detail/index.vue'
import Home from '@/pages/Home/index.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Search from '@/pages/Search/index.vue'
import AddCartSuccess from '@/pages/AddCartSuccess/index.vue'
import ShopCart from '@/pages/ShopCart/index.vue'
export default [
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { isShow: true },
  },
  { path: '/shopcart', component: ShopCart, meta: { isShow: true } },
  { path: '/detail/:skuid', component: Detail, meta: { isShow: true } },
  { path: '/home', component: Home, meta: { isShow: true } },
  { path: '/login', component: Login, meta: { isShow: false } },
  { path: '/register', component: Register, meta: { isShow: false } },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { isShow: true },
    name: 'search',
  },
  { path: '*', redirect: '/home' },
]
