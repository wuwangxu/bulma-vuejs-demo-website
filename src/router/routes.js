import home from '@/components/home'
import dashboard from '@/components/dashboard'
import blogs from '@/components/blogs'
import showblog from '@/components/showblog'
import aboutus from '@/components/aboutus'
import team from '@/components/team'
import contact from '@/components/contact'

export default [
  {
    path: '/',
    component: home
  },
  {
    path: '/dashboard',
    component: dashboard
  },
  {
    path: '/blogs',
    component: blogs
  },
  {
    path: '/blog/:id/:users',
    component: showblog
  },
  {
    path: '/aboutus',
    component: aboutus
  },
  {
    path: '/team',
    component: team
  },
  {
    path: '/contact',
    component: contact
  }
];
