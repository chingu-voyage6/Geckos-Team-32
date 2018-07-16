<template>
  <router-link :to="{ name:'recipePage', params:recipeData}" class="link-wrapper">
    <div class="recipe-item ">
      <!-- <span @click="removeRecipe(recipe.id)">X</span><br> -->
      <img :src="require('./default.png')" class="default">
      <div class="title-wrapper">
        <span v-text="recipe.Title"></span><br>
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
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      recipe: this.recipeData
    };
  },
  computed:{
    recipeImage(){
      return 'url(default.png})'
    }
  },
  methods:{
    ...mapActions(["removeRecipe"])
  },
  mounted() {
    // console.log(this.recipeData);
  }
};
</script>

<style lang="scss" scoped>
.recipe-item {
  display: flex;
  width: 200px;
  min-height: 200px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.link-wrapper{
  display: block;
}
.title-wrapper{
  position: absolute;
  bottom: 0; 
  width: 100%;
  padding: 5px 5px 5px 10px;
  transform: translateY(100%);
  transition: 150ms ease-out;; 
}
.link-wrapper:hover .title-wrapper{
   transform: translateY(0);
}
.default{
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>