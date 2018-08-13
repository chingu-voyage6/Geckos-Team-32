<template>
  <transition name="fade">
    <div class="recipe" v-if="recipe">
      <div class="title" >
        <h2>{{recipe.Title}} by <span>{{recipe.User}}</span></h2> 
      </div>
      <div class="descritption">
        <div class="image" >
          <img :src="recipe.ImageUrl" />
      </div>
        <div class="list">
          <p class="list-header">Ingredients</p>
          <ul class="elements">
            <li v-for="item in recipe.Ingredients">
              <span>{{item.name}} </span> 
              <span>{{item.quantity.number}} </span> 
              <span>{{item.quantity.unit}} </span>
            </li>
          </ul>
          <p class="list-header">Directions</p>
            <div class="elements">
              <span>{{recipe.Directions}}</span>
            </div>
        </div>
      </div>
    </div>
  </transition> 
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

<style  lang="scss" scoped>
.fade-enter-active {
  transition: opacity .5s;
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.recipe {
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
}

.descritption {
  display: flex;
}

.title {
  margin-top: 15px;
  margin-bottom: 25px;
  font-family: Oleo Script, cursive;
  color: #d80404;
  text-align: center;
  padding: 30px;
  letter-spacing: 2px;
}

.list {
  width: 40%;
  flex-grow: 0.5;
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

.list-header {
  @extend .elements;
  font-size: 1.5em;
}
.image {
  width: 50%;
  margin: auto;
  text-align: center;
}

img {
  object-fit: contain;
  max-height: 300px;
}

@media screen and (max-width: 768px) {

  #app {
display: block}

.title {
  margin-top: 0px;
  margin-bottom:0px;
}

.social {
text-align: center;
}

.list[data-v-bfeed63e] {
	 width: 100%;
	 -ms-flex-positive: 0.5;
	 flex-grow: 0.5;
}

img {
 width: 100%;
 vertical-align: middle;
 border-style: none;
}
}
</style>