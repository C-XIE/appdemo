import HomePage from './components/homepage/homepage.js';
import Detail from './components/detail/detail.js';
import Login from './components/login/login.js';

export default {
  name: 'app',
  id: 'com.myapp.test',
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/detail',
      component: Detail,
    },
    {
      path: '/login',
      component: Login,
    }
    // {
    //   path: '(.*)',
    //   component: NotFoundPage,
    // }
  ],
};




