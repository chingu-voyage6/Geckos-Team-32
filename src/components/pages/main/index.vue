<template>
    <div>
        main
        <button @click="addNewRecipe">Add recipe</button>
        <div v-for="recipe in getRecipes">
            {{ recipe.id}} | {{recipe.Directions }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainPage",
  data() {
    return {
      recepies: []
    };
  },
  computed: {
    ...mapGetters(["getRecipes"])
  },
  methods: {
    ...mapActions({
        addRecipeToDB:"addRecipe"
      }),
    addNewRecipe(){
      let newItem = {
        User: "Oleg",
        Title: "my title",
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