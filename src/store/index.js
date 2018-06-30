import Vue from "vue";
import Vuex from "vuex";
import { fireDb } from "@/modules/firebase";

Vue.use(Vuex);

const RecipesFireDB = fireDb.collection("Recipes");

export default new Vuex.Store({
  state: {
    recepes: []
  },
  getters: {
    getRecipes(state) {
      return state.recepes;
    }
  },
  mutations: {
    LOAD_RECIPES(state, loadedRecepies) {
      state.recepes = loadedRecepies;
    },
    ADD_RECIPE(state, newRecipe) {
      state.recepes.push(newRecipe);
    }
  },
  actions: {
    loadRecipes(context) {
      RecipesFireDB.get().then(snapshot => {
        const extractedRecepes = snapshot.docs.map(doc => {
          let recepeWithId = { ...doc.data(), id: doc.id };
          return recepeWithId;
        });

        context.commit("LOAD_RECIPES", extractedRecepes);
      });
    },
    addRecipe(context, newRecipe) {
      RecipesFireDB.add(newRecipe)
        .then(docRef => context.commit("ADD_RECIPE", newRecipe))
        .catch(error => console.error("Error writing document: ", error))
    }
  }
});
