import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrintTemps from '@/view/eqManagement/PrintTemps'
import management from '@/view/eqManagement/management'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PrintTemps',
      component: PrintTemps
    },{
      path: '/PrintTemps',
      name: 'PrintTemps',
      component: PrintTemps
    },{
      path: '/management',
      name: 'management',
      component: management
    }
  ]
})
