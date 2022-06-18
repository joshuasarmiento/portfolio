import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import ItemView from '../views/ItemView.vue'
import NotFound404 from '../notFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/item/:id',
    name: 'itemview',
    component: ItemView,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound404,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
