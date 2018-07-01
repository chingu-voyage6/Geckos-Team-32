import Vue from "vue";
import Vuex from "vuex";
import { fireDb } from "@/modules/firebase";

Vue.use(Vuex);

const RecipesFireDB = fireDb.collection("Recipes");

export default new Vuex.Store({
  state: {
    recipes: []
  },
  getters: {
    getRecipes(state) {
      return state.recipes.map(doc => {
        let recepeWithId = { ...doc.data(), id: doc.id };
        return recepeWithId;
      });
    }
  },
  mutations: {
    LOAD_RECIPES(state, loadedRecepies) {
      state.recipes = loadedRecepies;
    },
    ADD_RECIPE(state, newRecipe) {
      state.recipes.push(newRecipe);
    },
    REMOVE_RECIPE(state, recipe){
      const index = state.recipes.findIndex(item => item.id === recipe.id);
      state.recipes.splice(index, 1);
    }
  },
  actions: {
    addRecipe(context, newRecipe) {
      RecipesFireDB.add(newRecipe)
        .catch(error => console.error("Error adding document: ", error));
    },
    removeRecipe(context, docId){
      RecipesFireDB.doc(docId).delete()
        .catch(error => console.error("Error deleting document: ", error));
    
    },
    fireDbChangesListner(context) {
      RecipesFireDB.onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        const changeHandler = changeHandlersMap();
        changes.forEach(change =>
          changeHandler[change.type](context, change)
        );
      });
    }
  }
});

function changeHandlersMap() {
  return {
    added: (context, change) => context.commit("ADD_RECIPE", change.doc),
    removed: (context, change) => context.commit("REMOVE_RECIPE", change.doc)
  };
}
