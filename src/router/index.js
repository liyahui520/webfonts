import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrintTemps from '@/view/eqManagement/PrintTemps' 
import Base from '@/view/BaseInformation' 
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
      path: '/Base',
      name: 'Base',
      component: Base 
    },{
      path: '/management',
      name: 'management',
      component: management 
    }
  ]
})
