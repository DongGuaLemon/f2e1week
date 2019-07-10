import Vue from 'vue'
import Router from 'vue-router'
import Mainclock from './views/Mainclock'
import Todopage from './views/Todopage'
import Todolist from './components/todoview'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Mainclock
    },
    {
      path:'/todopage',
      name:'todopage',
      component:Todopage,
    children:[ {
      path:'',
      name:'todoview',
      component:Todolist
    }]
   },
  ]
})
