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
      return this.getRecipieById(this.$route.params.id)
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
</style>