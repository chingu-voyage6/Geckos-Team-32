<template>
  <div id="app">
    <MainHeader class="header"></MainHeader>
    <router-view class="content" />
    <MainFooter class="footer"></MainFooter>
  </div>
</template>

<script>
import MainHeader from "+/MainHeader"
import MainFooter from "+/MainFooter"
import { mapActions } from "vuex";

export default {
  name: "App",
  components:{
    MainHeader,
    MainFooter
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

#app{
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto ;
}
.header{
  grid-row-start: 1;
  grid-row-end: 1;
  min-height: 0
}
.content{
  grid-row-start: 2;
  grid-row-end: 3;
  margin-bottom: 20px;
}
.footer {
  grid-row-start: 3;
  grid-row-end: 4;
}
</style>
