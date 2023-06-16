// createWebHashHistory去掉hash就会去掉网站中的#
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChargingPileGeneralView from '../views/ChargingPileGeneralView.vue'
import NotFoundView from '../views/NotFoundView'
import ReportDisplayView from '../views/ReportDisplayView'
import WaitingCarsInfoView from '../views/WaitingCarsInfoView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView  //根目录一个homeview
  },
  {
    path: '/ChargingPileGeneralView/',
    name: 'chargingpilegeneral',
    component: ChargingPileGeneralView  //根目录一个homeview
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView  //根目录一个homeview
  },
  {
    path: '/ReportDisplayView/',
    name: 'reportdisplay',
    component: ReportDisplayView  //根目录一个homeview
  },
  {
    path: '/WaitingCarsInfoView/',
    name: 'waitingcarsinfo',
    component: WaitingCarsInfoView  //根目录一个homeview
  },
  {
    path: '/:catchAll(.*)',
    redirect: "/404/",
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
