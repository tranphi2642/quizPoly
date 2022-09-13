import Home from '../views/Home'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Register from '../views/Register'

const publicRouters = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
]

const privateRouters = []

export { publicRouters, privateRouters }
