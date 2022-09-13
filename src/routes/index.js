import Home from '../views/Home'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Register from '../views/Register'
import Courses from '../views/Courses'
import Examination from '../views/Examination'
import ForgotPass from '../views/ForgotPass'
import Introduce from '../views/Introduce'

const publicRouters = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/introduce',
    component: Introduce,
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
  {
    path: '/forgotpassword',
    component: ForgotPass,
  },
]

const privateRouters = []

export { publicRouters, privateRouters }
