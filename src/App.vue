<template>
  <div id="app">
    <TopBar class="topbar"></TopBar>
    <MainHeader class="header"></MainHeader>
    <div class="content" >
      <PopupNotify class="global-notify"></PopupNotify>
      <router-view />
    </div>
    <MainFooter class="footer"></MainFooter>
  </div>
</template>

<script>
import MainHeader from "+/MainHeader";
import MainFooter from "+/MainFooter";
import TopBar from "+/TopBar";
import PopupNotify from "+/PopupNotify";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
    TopBar,
    PopupNotify
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
html {
  width: 100vw;
  overflow-x: hidden;
}

#app {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}
.topbar {
  position: relative;
  z-index: 100;
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
.global-notify {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.footer {
  grid-row-start: 4;
  grid-row-end: 5;
}
</style>
