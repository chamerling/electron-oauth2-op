import Login from './components/Login.vue';

// auth https://github.com/vuejs/vue-router/blob/dev/examples/auth-flow/app.js

const routes = [    
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

export default routes;