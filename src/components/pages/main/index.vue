<template>
  <div class="page-wrapper">
    <search-box class="search"
                @search="search"
                @click.native.once="setGridHeight"
    ></search-box>      
    <transition-group name="list" class="grid-container" tag="div" ref="grid" :style="{height:gridHeigth}">
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
      query: "",
      gridHeigth: "initial"
    };
  },
  computed: {
    ...mapGetters(["getRecipes"]),
    recipeList() {
      return this.getRecipes;
    },
    recipes() {
      const query = new RegExp(`${this.query}`, "i");
      const list = this.recipeList.filter(
        recipe => ~recipe.Title.search(query)
      );
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
    },
    setGridHeight(e) {
      const initialHeight = this.$refs.grid.$el.offsetHeight;
      this.gridHeigth = `${initialHeight}px`;
      console.log(this.gridHeigth);
      // console.log();
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

>>>.recipe-item  .image-container >img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: 50% 50%;
}
</style>