import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Single from '@/components/Single'
import New from '@/components/New'
import Show from '@/components/Show'
import Best from '@/components/Best'
import Job from '@/components/Job'
import Ask from '@/components/Ask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/best',
      name: 'Best',
      component: Best
    },
    {
      path: '/shows',
      name: 'Show',
      component: Show
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/ask',
      name: 'Ask',
      component: Ask
    },
    {
      path: '/story/:id',
      name: 'Single',
      component: Single
    }
  ]
})
