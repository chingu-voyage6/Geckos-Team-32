<template>
  <div class="recipe-item">
    <router-link :to="{ name:'recipePage', params:recipeData}">open</router-link><br>
    <span @click="removeRecipe(recipe.id)">X</span><br>
    <span v-text="recipe.Title"></span><br>
    <span v-text="recipe.Directions"></span> 
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "recipe-item",
  props: {
    recipeData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      recipe: this.recipeData
    };
  },
  methods:{
    ...mapActions(["removeRecipe"])
  },
  mounted() {
    // console.log(this.recipeData);
  }
};
</script>

<style lang="scss" scoped>
.recipe-item {
  width: 200px;
  min-height: 100px;
  background-color: gray;
}
</style>