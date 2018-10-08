import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import home from '@/pages/home/home'
import classify from '@/pages/classify/classify'
import cart from '@/pages/cart/cart'
import me from '@/pages/me/me'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:content,
      children:[{
        path:'/home',
        component:home,
        meta: "首页"
      },{
        path:'/classify',
        component:classify,
        meta:'分类'
      },{
        path:'/cart',
        component:cart,
        meta:'购物车'
      },{
        path:'/me',
        component:me,
        meta:'我的'
      }]
    }
  ]
})

