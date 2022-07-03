import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Login from '../components/layouts/Login.vue';
import Dashboard from '../components/layouts/Dashboard.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Posts from '../views/Posts.vue';
import Post from '../views/Post.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: 'posts',
        name: 'Posts',
        component: Posts,
      },
      {
        path: 'posts/:id',
        name: 'Post',
        component: Post,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthentication = JSON.parse(localStorage.getItem('authenticated'));

  if (to.name != 'Login' && !isAuthentication) next({ name: 'Login' });
  if (to.name === 'Login' && isAuthentication) next({ name: 'Home' });
  else next();
});

export default router;
