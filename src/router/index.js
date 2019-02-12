//0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
import Vue from 'vue'
import VueRouter from 'vue-router'
import content from '../components/content.vue'
import newslist from '../components/rightpanel/NewsList.vue'
import newsdetail from '../components/rightpanel/NewsDetail.vue'
import addnews from '../components/rightpanel/AddNews.vue'
import scrollnews from '../components/rightpanel/ScrollNews.vue'

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/main',component:content,
    children: [{
      path: 'listview',
      component: newslist,
      name:'listview'
    },{
      path: 'addnews',
      component: addnews
    },{
      path: 'viewdetail',
      name: 'detail',
      component: newsdetail
    },{
      path:'scrollnews',
      name:'scrollnews',
      component:scrollnews,
    }]
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
 
// Now the app has started!

export default router