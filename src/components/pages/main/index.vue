<template>
  <div class="page-wrapper">
    <search-box class="search"
                @search="search"
    ></search-box>      
    <transition-group name="list" class="grid-container" tag="div">
      <recipe-item class="list-item" 
                   v-for="(recipe, index) in recipes" :key="recipe.id" 
                   :recipeData="recipe"
                   :style ="{ transitionDelay: getDelay(index) }"
      ></recipe-item> 
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import search from "./SearchBox";
import RecipeItem from "./RecipeItem";

export default {
  name: "MainPage",
  components: {
    RecipeItem,
    "search-box": search
  },
  data() {
    return {
      query: ""
    };
  },
  computed: {
    ...mapGetters(["getRecipes"]),
    recipeList() {
      return this.getRecipes;
    },
    recipes() {
      const query = new RegExp(`${this.query}`,'i');
      const list = this.recipeList.filter(recipe => ~recipe.Title.search(query));
      return list.length > 0 ? list : this.recipeList;
    }
  },
  methods: {
    getDelay(index) {
      const koef = 100;
      return `${index * koef}ms`;
    },
    search(search) {
      this.query = search.query;
    }
  }
};
</script>

<style scoped>
.page-wrapper {
  position: relative;
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  transition: all 1s ease-in-out;
}
.grid-container {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 20px;
  width: 100%;
  justify-items: center;
}
.search {
  margin: -150px auto 50px;
}
.list-item {
  transition: 0.5s opacity ease-in-out, transform 1s ease-in;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>