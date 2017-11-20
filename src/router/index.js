import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import User from '@/components/user/user'
import aboutUs from '@/components/understand-cinema/understand-cinema'
import promotionCommission from '@/components/promotion-commission/promotion-commission'
import bindPhone from '@/components/bind-phone/bind-phone'
import extension from '@/components/extension/extension'
import MyApprentice from '@/components/my-apprentice/my-apprentice'
import CommisDetails from '@/components/commis-details/commis-details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: 'about-us/:type',
          name: 'about-us',
          component: aboutUs
        },
        {
          path: 'promotion-commission',
          name: 'promotion-commission',
          component: promotionCommission
        },
        {
          path: 'bind-phone',
          name: 'bind-phone',
          component: bindPhone
        },
        {
          path: 'my-apprentice',
          name: 'my-apprentice',
          component: MyApprentice
        },
        {
          path: 'commis-details',
          name: 'commis-details',
          component: CommisDetails
        }
      ]
    },
    {
      path: '/extension',
      name: 'extension',
      component: extension
    }
  ]
})
