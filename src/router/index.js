import Vue from 'vue'
import VueRouter from 'vue-router'
import MyPage from '@/views/MyPage'
import Main from '@/views/Main'
import Signup from '@/views/Signup'
import Signin from '@/views/Signin'
import pfEditor from '@/views/pfEditor'
import ytEditor from '@/views/ytEditor'
import twEditor from '@/views/twEditor'
import scEditor from '@/views/scEditor'
import editor from '@/views/editor'
import firebase from 'firebase/app'
import 'firebase/auth'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/pfeditor',
      name: 'PfEditor',
      component: pfEditor,
      meta: { requiresAuth: true }
    },
    {
      path: '/yteditor',
      name: 'YtEditor',
      component: ytEditor,
      meta: { requiresAuth: true }
    },
    {
      path: '/tweditor',
      name: 'TwEditor',
      component: twEditor,
      meta: { requiresAuth: true }
    },
    {
      path: '/sceditor',
      name: 'ScEditor',
      component: scEditor,
      meta: { requiresAuth: true }
    },
    {
      path: '/editor',
      name:'Editor',
      component: editor,
      meta: { requiresAuth: true }
    },
    // {
    //   path: '/',
    //   name: 'Main',
    //   component: Main
    // },
    {
      path: '/:id',
      name: 'Main',
      component: Main
    },
    {
      path: '*',
      redirect: '/'
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
