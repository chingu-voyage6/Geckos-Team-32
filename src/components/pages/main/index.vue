<template>
    <div>
      <search class="search"/>      
      <button @click="addNewRecipe">Add recipe</button>
      <div class="grid-container">
        <recipe-item v-for="recipe in getRecipes" :key="recipe.id" :recipeData="recipe"></recipe-item>
      </div>
    </div>
</template>

<script>
import search from "*/search";
import { mapGetters, mapActions } from "vuex";
import RecipeItem from "./RecipeItem";

export default {
  name: "MainPage",
  components: {
    RecipeItem,
    search,

  },
  data() {
    return {
      recipes: []
    };
  },
  computed: {
    ...mapGetters(["getRecipes"])
  },
  methods: {
    ...mapActions({
      addRecipeToDB: "addRecipe"
    }),
    addNewRecipe() {
      let newItem = {
        User: "Oleg",
        Title: "Sweet water",
        Directions: "just do it!",
        Ingridients: [
          {
            name: "sugar",
            price: 1,
            quanity: 2
          }
        ]
      };
      this.addRecipeToDB(newItem);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  width: 100%;
  align-items: center;
  justify-items: center;
}
.search {
  margin-left: 300px;
  position: relative;
  top: -150px;
}
</style>