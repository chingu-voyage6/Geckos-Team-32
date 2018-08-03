<template>
    <div class="popup-notify" v-if="show">
           <div class="popup-window">
               <h3 class="popup-heading">
                   <slot name="heading">Chez Gourmet</slot>
               </h3>
               <div class="content">
                   <slot name="content">HELLLO</slot>
               </div>
               <div class="close-button">
                   <i class="fa fa-window-close" aria-hidden="true" @click="hidePopup"></i>
                </div>
           </div>
    </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";


export default {
  name: "popup-notify",
  props: {
    show: {
      type: Boolean,
      value: true
    }
  },
  data: () => {
    return {};
  },
  methods:{
      ...mapActions(["hidePopup"])
  }
};
</script>

<style lang="scss" scoped>
.popup-notify {
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100;
  display: flex;
}

.popup-window {
  position: relative;
  margin: auto;
  min-height: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  flex-basis: 600px;
  flex-grow: 0.3;

  .popup-heading {
    min-height: 2em;
    width: 100%;
    padding-bottom: 20px;
    font-family: Oleo Script, cursive;
  }

  .close-button {
    width: 1em;
    height: 1em;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2em;
    line-height: 0;
  }

  .content {
    padding: 10px;
    font-family: Nothing You Could Do, sans-serif;
    font-weight: bold;
    font-size: 2em;
  }
}
</style>