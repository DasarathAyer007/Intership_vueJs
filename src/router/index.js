import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserStats from '@/views/UserStats.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    name:'profile',
    path:'/profile/:name',
    component:ProfileView,
    children: [
      { path: 'stats', component: UserStats }]
  },
  {
    name:'PageNotfound',
    path:'/:pathMatch(.*)*',
    component:NotFound
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
