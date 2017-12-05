import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home.vue'
import table from '@/components/common/table.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
     { path: '/table', 
     component: table }
  ]
})
