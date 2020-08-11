import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/home/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/direct',
    name: 'Direct',
    component: () =>
      import(/* webpackChunkName: "direct" */ '../views/direct/Index')
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () =>
      import(/* webpackChunkName: "explore" */ '../views/explore/Index')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/profile/Index'),
    children: [
      {
        path: '',
        name: 'ProfilePost',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/Post')
      },
      {
        path: 'igtv',
        name: 'ProfileIgtv',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/Igtv')
      },
      {
        path: 'save',
        name: 'ProfileSave',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/Save')
      },
      {
        path: 'tag',
        name: 'ProfileTag',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/Tag')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
