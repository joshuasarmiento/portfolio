import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import ItemView from '../views/ItemView.vue'
import Project from '../views/Project.vue'
import Contact from '../views/Contact.vue'
import NotFound404 from '../404.vue'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
			title: 'Joshua - Home',
		},
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
			title: 'Joshua - About',
		},
  },
  {
    path: '/project',
    name: 'project',
    component: Project,
    meta: {
			title: 'Joshua - Project',
		},
  },
  {
    path: '/project/:title',
    name: 'itemview',
    component: ItemView,
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
			title: 'Joshua - Contact',
		},
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
