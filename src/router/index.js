import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from '@/components/Pokedex'
import Pokemon from '@/components/Pokemon'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: Pokemon
    },
    {
      path: '/pokedex/:page?',
      name: 'pokedex',
      component: Pokedex
    },
    {
      path: '/',
      redirect: 'pokedex'
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
