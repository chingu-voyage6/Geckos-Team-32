<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div></div>
    test
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions([
        "fireDbChangesListner"
      ])
  },
  created() {
    this.fireDbChangesListner();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
