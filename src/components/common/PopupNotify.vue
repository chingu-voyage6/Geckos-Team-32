<template>
    <div class="popup-notify overlay">
        <div class="popup-window">
            <i class="fa fa-times close-button" aria-hidden="true"></i>
            <div class="popup-heading">
                <slot name="heading">Heading</slot>
            </div>
            <div class="popup-content">
                <slot name="content"> Lorem IPSUM </slot>
            </div>
            <div class="button-ok-container">
            <i class="fa fa-check icon" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;

  .close-button {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 3em;
    opacity: 0.8;
  }

  .popup-window {
    flex-basis: 600px;
    min-height: 300px;
    margin: auto;
    padding: 25px;
    background-color: #fff;
    border-radius: 4px;
    position: relative;
  }

  .popup-heading {
    font-family: "Oleo Script", cursive;
    margin-bottom: 20px;
    font-size: 2em;
    line-height: 2em;
    min-height: 2em;
    color: rgb(216, 4, 4);
    box-sizing: border-box;
  }
  .popup-content {
    padding-left: 20px;
    font-size: 1em;
    font-family: Nothing You Could Do, sans-serif;
    color: #d80404;
    font-weight: bold;
  }
  .button-ok-container {
    position: absolute;
    bottom: 10px;
    left: 50%;
    font-size: 1em;
    width: 3em;
    height: 1.5em;
    border: solid 1px #d80404;
    border-radius: 2px;
    box-shadow: 0 0 5px #d80404;
    display: flex;
    color: white;
    background-color: #ff0000b7;
    transform: translate(-50%, 0);
    .icon{
        margin: auto;
    }
  }
}
</style>