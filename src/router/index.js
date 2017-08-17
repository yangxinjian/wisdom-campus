import Vue from 'vue'
import Router from 'vue-router'
import Convenience from './convenience/convenience.vue'
import Apply from './declare/apply.vue'
import DeclarePlaceOnFile from './declare/declarePlaceOnFile.vue'
import Photo from './declare/photo.vue'
import ApplyForAbandon from './hazardousChemicals/applyForAbandon.vue'
import ApplyForBuy from './hazardousChemicals/applyForBuy.vue'
import ChemicalsPlaceOnFile from './hazardousChemicals/chemicalsPlaceOnFile.vue'
import UseState from './hazardousChemicals/useState.vue'
import Maps from './map/map.vue'
import Jurisdiction from './member/jurisdiction.vue'
import StudentsInformation from './member/studentsInformation.vue'
import TeachersInformation from './member/teachersInformation.vue'
import News from './news/news.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/convenience'
    },
    {
      path: '/convenience',
      name: 'convenience',
      component: Convenience
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    },
    {
      path: '/declare-place-on-file',
      name: 'declarePlaceOnFile',
      component: DeclarePlaceOnFile
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/apply-for-abandon',
      name: 'applyForAbandon',
      component: ApplyForAbandon
    },
    {
      path: '/apply-for-buy',
      name: 'applyForBuy',
      component: ApplyForBuy
    },
    {
      path: '/chemicals-place-on-file',
      name: 'chemicalsPlaceOnFile',
      component: ChemicalsPlaceOnFile
    },
    {
      path: '/use-state',
      name: 'useState',
      component: UseState
    },
    {
      path: '/map',
      name: 'map',
      component: Maps
    },
    {
      path: '/jurisdiction',
      name: 'jurisdiction',
      component: Jurisdiction
    },
    {
      path: '/students-information',
      name: 'studentsInformation',
      component: StudentsInformation
    },
    {
      path: '/teachers-information',
      name: 'teachersInformation',
      component: TeachersInformation
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
