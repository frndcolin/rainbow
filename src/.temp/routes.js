const c1 = () => import(/* webpackChunkName: "page--src--pages--old-index-vue" */ "/Users/cfriend/teagansbday/rainbow/src/pages/oldIndex.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/cfriend/teagansbday/rainbow/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/cfriend/teagansbday/rainbow/src/pages/Index.vue")

export default [
  {
    path: "/old-index/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
