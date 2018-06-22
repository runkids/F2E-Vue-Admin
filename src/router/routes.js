import Layout from '@/views/layout/index';
// eslint-disable-next-line
const _import = require(`./_import_${process.env.NODE_ENV}`);

const routes = [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        redirect: { name: 'home' },
        component: _import('Dashboard/index'),
        children: [
          { path: 'home', name: 'home', component: _import('Dashboard/Home/index') },
          { path: 'orders', name: 'orders', component: _import('Dashboard/Orders/index') },
          { path: 'product', name: 'product', component: _import('Dashboard/Product/index') },
        ],
      },
    ],
  },
];

export default routes;
