<template>
    <div>
        <MainHeader></MainHeader>
        <img src="../images/header-img.jpg" class="headerImg">

        <MainFooter class="footer"></MainFooter>
       
       <button @click="addNewRecipe">Add recipe</button>
        <div class="grid-container">
            <recipe-item v-for="recipe in getRecipes" :key="recipe.id"
                        v-bind:recipeData="recipe"
            ></recipe-item>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RecipeItem from "./Recipe-item";
import MainHeader from "+/MainHeader"
import MainFooter from "+/MainFooter"

export default {
  name: "MainPage",
  components: {
    RecipeItem,
    MainHeader,
    MainFooter
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
        Ingridients: [{
            name: "sugar",
            price: 1,
            quanity: 2,
          }
        ]
      };
      this.addRecipeToDB(newItem);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
}
.headerImg{
    width: 100%;
    height: 400px;
}
.footer{
    position: relative;
    top: 800px;
}
</style>