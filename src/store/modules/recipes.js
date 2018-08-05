import { fireDb } from "@/modules/firebase";

const RecipesFireDB = fireDb.collection("Recipes");

export const recipes = {
  state: {
    recipes: []
  },
  getters: {
    getRecipes(state) {
      return state.recipes.map(doc => {
        let recipeWithId = {
          ...doc.data(),
          id: doc.id
        };
        return recipeWithId;
      });
    },
    getRecipeById(state, store) {
      return function(id) {
        return store.getRecipes.find(item => item.id == id);
      };
    }
  },
  mutations: {
    ADD_RECIPE(state, newRecipe) {
      state.recipes.push(newRecipe);
    },
    REMOVE_RECIPE(state, recipe) {
      const index = state.recipes.findIndex(item => item.id === recipe.id);
      state.recipes.splice(index, 1);
    },
    MODIFY_RECIPE(state, modifiedRecipe){
      const index = state.recipes.findIndex(recipe => modifiedRecipe.id == recipe.id);
      state.recipes[index] = modifiedRecipe;
    }
  },
  actions: {
    addRecipe(context, newRecipe) {
      return RecipesFireDB.add(newRecipe).catch(error =>
        console.error("Error adding document: ", error)
      );
    },
    updateRecipeField(context,{id, payload}) {
      return RecipesFireDB.doc(id).update(payload);
    },
    removeRecipe(context, docId) {
      return RecipesFireDB.doc(docId)
        .delete()
        .catch(error => console.error("Error deleting document: ", error));
    },
    fireDbChangesListener(context) {
      const changeHandler = changeHandlersMap();
      RecipesFireDB.onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        changes.forEach(change => changeHandler[change.type](context, change));
      });
    }
  }
};

function changeHandlersMap() {
  return {
    added: (context, change) => context.commit("ADD_RECIPE", change.doc),
    removed: (context, change) => context.commit("REMOVE_RECIPE", change.doc),
    modified: (context, change) => context.commit("MODIFY_RECIPE", change.doc),
  };
}
