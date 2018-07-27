<template>
  <article class="page-wrapper">
    <section class="submit-form">
      <div class="heading">
        <h2>Your recipe</h2>
      </div>
      <div class="submit-recipe-container">
        <div class="container-item recipe">
          <label class="user-input-label">Title</label>
          <input class="user-input-field" type="text" placeholder="" v-model="newRecipe.title">
        </div>
        <div class="container-item ingridients">
          <label class="user-input-label">Ingredients</label>
          <input-ingridient :editIngridient="editedIngridient" 
                            :action="action" 
                            @Add="addIngridient" 
                            @Save="setIngridient"
          ></input-ingridient>
          <ul class="ingridient-list">
            <li class="item" v-for="(ingridient, index) in newRecipe.ingridients" :key="index">
              <i class="far fa-edit edit" @click="edit(index)"></i>
              <span>{{ ingridient.name }}</span>
              <i class="fas fa-trash-alt remove" @click="remove(index)"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="container-item directions">
        <label class="user-input-label">Directions</label>
        <textarea class="user-input-field" type="text" v-model="newRecipe.directions"></textarea>
      </div>
      <div class="container-item" User>
        <label class="user-input-label">Select a nickname</label>
        <input class="user-input-field" type="text">
      </div>
      </div>
    </section>
  </article>
</template>

<script>
import inputIngridient from "./inputIngridient";

export default {
  components: {
    inputIngridient
  },
  data: () => {
    return {
      newRecipe: {
        title: "",
        ingridients: [],
        directions: ""
      },
      editedIngridient: {},
      action: "Add",
      selected: -1
    };
  },
  methods: {
    addIngridient({ ingridient }) {
      this.newRecipe.ingridients.push(ingridient);
    },
    setIngridient({ ingridient }) {
      this.newRecipe.ingridients.splice(this.selected, 1, ingridient);
      this.action = "Add";
    },
    edit(index) {
      this.editedIngridient = this.newRecipe.ingridients[index];
      this.action = "Save";
      this.selected = index;
    },
    remove(index) {
      this.newRecipe.ingridients.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" >
.submit-form {
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
}
.heading {
  display: flex;
  justify-content: center;
  h2 {
    margin: 20px auto;
    font-family: Nothing You Could Do, sans-serif;
    font-size: 42px;
    color: rgb(216, 4, 4);
  }
}
.container-item {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.container-item:first-child {
  margin-top: 0;
}
.user-input-label {
  color: rgb(216, 4, 4);
  font-family: Nothing You Could Do, sans-serif;
  font-size: 20px;
  font-weight: bold;
}
.user-input-field {
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: rgb(235, 235, 235);
  font-size: 16px;
  color: grey;
  outline: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.directions .user-input-field {
  height: 8em;
  resize: none;
}
.ingridient-list {
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  margin: 0;
  list-style: none;

  .item {
    position: relative;
    min-width: 80px;
    padding: 5px 25px;
    margin-right: 20px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 20px;
    font-family: Nothing You Could Do, sans-serif;
  }
  .edit,
  .remove {
    position: absolute;
    border: 1px solid black;
    border-radius: 50%;
    padding: 5px;
    font-size: 15px;
    background-color: #fff;
    cursor: pointer;
  }
  .edit {
    bottom: -5px;
    left: -5px;
  }
  .remove {
    position: absolute;
    top: -5px;
    right: -5px;
  }
}
</style>