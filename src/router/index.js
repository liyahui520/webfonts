import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PrintTemps',
      component: () => import('./../view/eqManagement/PrintTemps')
    },{ 
      path: '/Base',
      name: 'Base',
      component: () => import('./../view/BaseInformation') 
    },{
      path: '/management',
      name: 'management',
      component: () => import('./../view/eqManagement/management') 
    },{
      path: '/modal',
      name: 'modal',
      component: () => import('./../view/modal') 
    },{
      path: '/chart/:id',
      name: 'chart',
      component: () => import('@/view/chart') 
    }
  ]
})
