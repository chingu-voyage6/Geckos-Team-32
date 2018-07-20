<template>
  <div id="app">
    <TopBar class="topbar"></TopBar>
    <MainHeader class="header"></MainHeader>
    <router-view class="content" />
    <MainFooter class="footer"></MainFooter>
  </div>
</template>

<script>
import MainHeader from "+/MainHeader";
import MainFooter from "+/MainFooter";
import TopBar from "+/TopBar";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
    TopBar
  },
  methods: {
    ...mapActions(["fireDbChangesListener"])
  },
  created() {
    this.fireDbChangesListener();
  }
};
</script>

<style>

#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.topbar{
  grid-row-start: 1;
  grid-row-end: 1;
  min-height: 0;
}
.header {
  grid-row-start: 2;
  grid-row-end: 2;
  min-height: 0;
}
.content {
  grid-row-start: 3;
  grid-row-end: 3;
  margin-bottom: 20px;
}
.footer {
  grid-row-start: 4;
  grid-row-end: 5;
}

</style>
