import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../components/LogIn'
import FacebookGoogle from '../components/FacebookGoogle'
import RegisterPage from '../components/RegisterPage'
import HotelsList from '../components/HotelsList'
import ProfilePage from '../components/ProfilePage'
import LoginDetails from '../components/LoginDetails'
import HotelDetails from '../components/HotelDetails'
import HotelRoom from '../components/hotel/HotelRoom'
import ProPic from '../components/ProPic'
import SearchSearch from '../components/hotel/SearchSearch.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/registerpage',
    name: 'registerpage',
    component: RegisterPage
  },
  {
    path: '/facebookgoogle',
    name: 'facebookgoogle',
    component: FacebookGoogle
  },
  {
    path: '/hotelslist',
    name: 'hotelslist',
    component: HotelsList
  },
  {
    path: '/profilepage',
    name: 'profilepage',
    component: ProfilePage
  },
  {
    path: '/logindetails',
    name: 'logindetails',
    component: LoginDetails
  },
  {
    path: '/hoteldetails',
    name: 'hoteldetails',
    component: HotelDetails
  },
  {
    path: '/hotelroom',
    name: 'hotelroom',
    component: HotelRoom
  },
  {
    path: '/propic',
    name: 'propic',
    component: ProPic
  },
  {
    path: '/searchsearch',
    name: 'searchsearch',
    component: SearchSearch
  },
]

const router = new VueRouter({
  routes
})

export default router
