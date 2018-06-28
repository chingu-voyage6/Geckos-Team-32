import Vue from "vue";
import Vuex from "vuex";
import { fireDb } from "@/modules/firebase";

Vue.use(Vuex);

const RecipesFireDB = fireDb.collection("Recipes");

export default new Vuex.Store({
  state: {
    recepies: []
  },
  getters: {
    getRecepies(state) {
      return state.recepies;
    }
  },
  mutations: {
    LOAD_RECIPIES(state, loadedRecepies) {
      state.recepies = loadedRecepies;
    },
    ADD_RECIPIE(state, newRecipie) {
      state.recepies.push(newRecipie);
    }
  },
  actions: {
    loadRecipies(context) {
      RecipesFireDB.get().then(snapshot => {
        const extractedRecepies = snapshot.docs.map(doc => {
          let recepieWithId = { ...doc.data(), id: doc.id };
          return recepieWithId;
        });
        
        context.commit("LOAD_RECIPIES", extractedRecepies);
      });
    },
    addRecipie(context, { Directions = "1test direction", Ingredients = "none11", Title = "Yammy" }) {
      RecipesFireDB.add({ Directions, Ingredients, Title })
        .then(docRef => { context.commit("ADD_RECIPIE", { Directions, Ingredients, Title, id: docRef.id })})
        .catch(error => console.error("Error writing document: ", error))
    }
  }
});
