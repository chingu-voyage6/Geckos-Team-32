<template>
  <router-link :to="{ name:'recipePage', params:recipeData}" class="link-wrapper" tag="div">
    <div class="recipe-item">
      <header class="title-wrapper">
        <span class="title" v-text="recipe.Title"></span>
      </header>
      <div class="image-container">
      <img :src="recipeImage">
      </div>
      <div class="title-wrapper user-name">
        <span class="title">By {{recipe.User}}</span>
      </div>
    </div>
  </router-link> 
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "recipe-item",
  props: {
    recipeData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      recipe: this.recipeData
    };
  },
  computed: {
    recipeImage() {
      const thumbnailPath = this.recipeData.ImageUrl
        ? `${this.recipeData.ImageUrl}`
        : require("./default.png");
      return thumbnailPath;
    }
  },
  methods: {
    ...mapActions(["removeRecipe"])
  }
};
</script>

<style lang="scss" scoped>
.recipe-item {
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  position: relative;
  background: #e6e6e6;
  overflow: hidden;
  cursor: pointer;
}
.link-wrapper {
  display: block;
}
.title-wrapper {
  width: 100%;
  transition: 150ms ease-out;
  .title {
    display: block;
    font-family: Nothing You Could Do;
    color: #d80404;
    font-size: 1.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
.user-name {
  text-align: right;
}
.image-container {
  width: 100%;
}

</style>