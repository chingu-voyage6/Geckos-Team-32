<template>
  <transition name="fade">
    <div class="recipe" v-if="recipe">
      <div class="title" >
        <h2>{{recipe.Title}} by <span>{{recipe.User}}</span></h2> 
      </div>
      <div class="description">
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
  transition: opacity 0.5s;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.recipe {
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
}

.description {
  display: flex;
  flex-basis: 500px;
  justify-content: space-between;
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
  margin-right: 20px;
  text-align: center;
}
img {
  object-fit: contain;
  max-width: 500px;
}

@media screen and (max-width: 1024px) {
  .image {
    img {
      max-width: 350px;
    }
  }
}

@media screen and (max-width: 800px) {
  .description {
    flex-wrap: wrap;
  }
  .image {
    max-width: 100%;
    margin: auto auto 40px auto;
    img {
      width: 100%;
    }
  }
}
</style>