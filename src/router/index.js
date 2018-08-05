import Vue from "vue";
import Router from "vue-router";
import MainPage from "*/main/index";
import SubmitPage from "*/submit/index";
import recipePage from "*/recipe/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage
    },
    {
      path: "/submit",
      name: "SubmitPage",
      component: SubmitPage
    },
    {
      path: "/recipe/:id",
      name: "recipePage",
      component: recipePage
    }
  ]
});
