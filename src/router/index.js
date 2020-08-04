import Vue from "vue";
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Category = ()=> import('../views/category/Category')
const Cart = ()=> import('../views/cart/Cart')
const Profile = ()=> import('../views/profile/Profile')
const Detail = ()=> import('../views/detail/Detail')

//1.安装插件
Vue.use(VueRouter)

//创建路由router
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  },
  {
    path: '/detail/:iid',
    component:Detail
  }
]
const router = new VueRouter({
  routes,
  mode:'history' //去掉页面链接中的#
})

//解决路由重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(localtion) {
  return originalPush.call(this, localtion).catch(err => err)
}

export default router
