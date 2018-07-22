<template>
  
    <div class="recipe" >
      <div class="title" >
        <h1>{{recipe.Title}}</h1> 
      </div>
      <div class="descritption">
        <div class="image" ><img src="./images/sven-481475-unsplash.jpg" />
      </div>
        <div class="list">
          <ul>
            <li class="elements" v-for="item in recipe.Ingridients">
            Ingredients: <span></span> {{item.name}},
            </li>       
            <li class="elements" v-for="item in recipe.Ingridients">
              {{item.quanity}} dl.</li>
          </ul>
            <div class="elements">Directions: <span></span> {{recipe.Directions}}
            </div>
        </div>
      </div>
    </div>
</template>
/*{{recipe}}*/
<script>
import { mapGetters } from "vuex";

export default {
  name: "recipe",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getRecipeById"]),
    recipe() {
      const recipeId = this.$route.params.id;
      return this.getRecipeById(recipeId);
    }
  },
  mounted() {}
};
</script>

<style scoped>

.recipe{
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
}

.descritption{
  display: flex;
}

.title {
  font-family:Oleo Script,cursive; 
  color: #d80404;
  text-align: center;
  padding: 30px;
  letter-spacing: 2px;
}

.list{
  width: 40%;
}

ul{
  margin-left: -40px;
}

.elements, span{
  font-style: italic;
  display: inline;
  list-style: none;
  font-family:Oleo Script,cursive; 
  color: #d80404;
  padding-right: 10px;

}
.image{
  width: 50%;
  margin: auto;
  text-align: center;
}

img{
  height: 20em;
  width: 20em;
}

</style>