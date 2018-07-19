<template>
    <div>
        <TopBar/>
        <MainHeader/>
        <img src="../images/header-img.jpg" class="headerImg">
        <search class="search"/>
        <MainFooter class="footer"/>
        
       

       <button @click="addNewRecipe">Add recipe</button>
        <div class="grid-container">
            <recipe-item v-for="recipe in getRecipes" :key="recipe.id"
                         v-bind:recipeData="recipe"
            ></recipe-item>
        </div>
    </div>
</template>

<script>
    import TopBar from "+/TopBar"
    import MainHeader from "+/MainHeader"
    import MainFooter from "+/MainFooter"
    import search from "*/search"
    import { mapGetters, mapActions } from "vuex";
    import RecipeItem from "./RecipeItem";
    
    export default {
        components:{
            TopBar,
            MainHeader,
            MainFooter,
            search
            
        },
    }


export default {
  name: "MainPage",
  components: {
    RecipeItem,
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

<style scoped>
.headerImg{
    width: 100%;
    height: 350px;
}

.footer{
    position: relative;
    top: 800px;
}

.search{
    margin-left: 300px;
    position: relative;
    top:-150px;
/* <style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  width: 100%; 
  align-items: center;
  justify-items: center;
} */

</style>