import Vue from "vue"
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Category = () => import('../views/category/Category.vue')
const Detail = () => import('views/detail/Detail.vue')



Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      component: Home
    }, 
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail',
      component: Detail
    }
  ],
  mode: "history"
})

export default router