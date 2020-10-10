import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/Register'
import Login from '../pages/Login'
import Account from '../pages/Account'
import Ledger from '../pages/Ledger'
import Profile from '../pages/Profile'
import AddLedger from '../pages/AddLedger'
import Select from '../pages/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/register'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/ledger',
      name: 'Ledger',
      component: Ledger
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/add-ledger',
      name: 'AddLedger',
      component: AddLedger
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})
