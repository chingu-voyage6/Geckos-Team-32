<template>
  <div class="recipe" v-if="recipe">
    <div class="title" >
      <h2>{{recipe.Title}}</h2> 
    </div>
    <div class="descritption">
      <div class="image" >
        <img :src="recipe.ImageUrl" />
    </div>
      <div class="list">
        <ul>
          <li class="elements" v-for="item in recipe.Ingredients">
            <span>{{item.name}} </span> 
            <span>{{item.quantity.number}} </span> 
            <span>{{item.quantity.unit}} </span>
          </li>
        </ul>
          <div class="elements">
            <span>Directions:</span>
            <span>{{recipe.Directions}}</span>
          </div>
      </div>
    </div>
  </div>
</template>
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
.recipe {
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
}

.descritption {
  display: flex;
}

.title {
  font-family: Oleo Script, cursive;
  color: #d80404;
  text-align: center;
  padding: 30px;
  letter-spacing: 2px;
}

.list {
  width: 40%;
}

ul {
  margin-left: -40px;
}

.elements {
  font-style: italic;
  list-style: none;
  font-family: Oleo Script, cursive;
  color: #d80404;
  padding-right: 10px;
}
.image {
  width: 50%;
  margin: auto;
  text-align: center;
}

img {
  height: 20em;
  width: 20em;
}
</style>