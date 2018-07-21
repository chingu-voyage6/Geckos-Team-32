<template>
    <div class="page-wrapper">
      <search class="search"/>      
        <transition-group name="list" class="grid-container" tag="div">
          <recipe-item class="list-item" 
                       v-for="(recipe, index) in recipeList" 
                       :key="recipe.id" 
                       :recipeData="recipe"
                       :style =" {transitionDelay:`${index*100}ms`}"
          ></recipe-item> 
        </transition-group>
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
.list-item {
  transition: 0.5s opacity ease-in-out, transform 1s ease-in;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

</style>