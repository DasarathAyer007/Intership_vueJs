import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductList from '@/components/ProductList.vue'
import AddProduct from '@/components/AddProduct.vue'
import LaravelApi from '@/components/LaravelApi.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  },
  {
    name:'Product',
    path:'/product/:id',
    component:ProductDetail
  },
  {
    name:'AddProduct',
    path:'/add-product',
    component:AddProduct
  },
  {
    name:LaravelApi,
    path:'/laravel-product',
    component:LaravelApi
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
