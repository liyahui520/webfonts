import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrintTemps from '@/view/eqManagement/PrintTemps'
import Base from '@/view/BaseInformation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/PrintTemps',
      name: 'PrintTemps',
      component: PrintTemps
    },{
      path: '/Base',
      name: 'Base',
      component: Base
    }
  ]
})
