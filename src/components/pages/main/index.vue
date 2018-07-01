<template>
    <div>
        main
        <button @click="addNewRecipe">Add recipe</button>
        <div v-for="recipe in getRecipes" @click = "removeRecipe(recipe.id)">
            {{ recipe.id }} | {{recipe.Directions }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainPage",
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
        addRecipeToDB: "addRecipe",
        removeRecipe: "removeRecipe"
      }),
    addNewRecipe(){
      let newItem = {
        User: "Oleg",
        Title: "Sweet water",
        Directions: "just do it!",
        Ingridients: {
          sugar: 0.5,
          water: 0.5
        }
      } 
      this.addRecipeToDB(newItem);
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>