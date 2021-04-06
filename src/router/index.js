import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '@/views/store/Store.vue'
import Library from '@/views/library/Library.vue'
import Community from '@/views/community/Community.vue'
import Mine from '@/views/mine/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/store',
    component: Store
  },
  {
    path: '/library',
    component: Library
  },
  {
    path: '/community',
    component: Community
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '',
    redirect: '/store'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
