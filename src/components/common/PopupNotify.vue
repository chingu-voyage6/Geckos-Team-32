<template>
    <div class="popup-notify">
           <div class="popup-window">
               <h3 class="popup-heading">
                   <slot name="heading">Chez Gourmet</slot>
               </h3>
               <div class="content">
                   <slot name="content">HELLLO</slot>
               </div>
               <div class="close-button"><i class="fa fa-window-close" aria-hidden="true"></i></div>
                <div></div>          
           </div>
    </div>
</template>

<script>
export default {
  name: "popup-notify",
  data:()=>{
      return{

      }
  }
};
</script>

<style lang="scss" scoped>
.popup-notify {
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);;
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

  .close-button{
      width: 1em;
      height: 1em;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 2em;
      line-height: 0;
  }

  .content{
      padding: 10px;
      font-family: Nothing You Could Do, sans-serif;
      font-weight: bold;
      font-size: 1em;
  }

}
</style>