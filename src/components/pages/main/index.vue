<template>
    <div>
        main
        <button @click="addRecipie">Add recipie</button>
        <div v-for="recepie in getRecepies">
            {{ recepie.id}} | {{recepie.Directions }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainPage",
  data() {
    return {
      recepies: []
    };
  },
  computed: {
    ...mapGetters(["getRecepies"])
  },
  methods: {
    ...mapActions(["addRecipie"])
  },
  mounted() {}
};
</script>

<style scoped>
</style>