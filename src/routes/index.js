import Home from '../views/Home'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Register from '../views/Register'
import Courses from '../views/Courses'
import Examination from '../views/Examination'

const publicRouters = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/courses',
    component: Courses,
  },
  {
    path: '/examination',
    component: Examination,
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
