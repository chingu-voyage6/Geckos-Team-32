import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '*/main/index';
import SearchPage from '*/search/index';
import SubmitPage from '*/submit/index';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage,
    },
    {
      path: '/submit',
      name: 'SubmitPage',
      component: SubmitPage,
    },
  ],
});