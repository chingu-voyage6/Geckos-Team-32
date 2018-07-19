<template>
    <div>
    {{recipe}}
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "recipe",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["getRecipieById"]),
    recipe(){
      const recipeId = this.$route.params.id;
      return this.getRecipieById(recipeId);
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
</style>