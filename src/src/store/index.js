import Vue from "vue";
import Vuex from "vuex";
import { recipes } from "./modules/recipes";
import { popup } from "./modules/popup";

Vue.use(Vuex);



export default new Vuex.Store({
  modules:{
    recipes,
    popup
  }
});

