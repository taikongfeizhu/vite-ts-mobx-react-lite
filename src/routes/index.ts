import Home from '@/pages/Home';
import About from '@/pages/About';
import ErrorPage from '@/pages/Error';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '*',
    component: ErrorPage,
  },
];

export default routes;
