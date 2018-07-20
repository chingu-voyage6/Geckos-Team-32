<template>
    <div class="page-wrapper">
      <search class="search"/>      
      <div class="grid-container">
        <recipe-item v-for="recipe in recipeList" :key="recipe.id" :recipeData="recipe"></recipe-item>
      </div>
    </div>
</template>

<script>
import search from "*/search";
import { mapGetters } from "vuex";
import RecipeItem from "./RecipeItem";

export default {
  name: "MainPage",
  components: {
    RecipeItem,
    search
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getRecipes"]),
    recipeList() {
      return this.getRecipes;
    }
  }
};
</script>

<style scoped>
.page-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  width: 100%;
  align-items: center;
  justify-items: center;
}
.search {
  margin: -150px auto 50px;
}
</style>