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
                    <ingridient @addIngridient="addIngridient" :editIngridient="toEdit" :edit="status"></ingridient>
                    <ul class="ingridient-list">
                        <li class="item" v-for="(ingridient, index) in newRecipe.ingridients">
                            <i class="far fa-edit edit" @click="edit(index)"></i>
                            <span>{{ ingridient.name }} </span>
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
import ingridient from "./Ingridient";

export default {
  components: {
    ingridient
  },
  data: () => {
    return {
      newRecipe: {
        title: "",
        ingridients: [],
        directions: ""
      },
      toEdit: {},
      status: false
    };
  },
  methods: {
    addIngridient({ ingridient }) {
      this.newRecipe.ingridients.push(ingridient);
    },
    remove(index) {
      this.newRecipe.ingridients.splice(index, 1);
    },
    edit(index) {
      this.toEdit = this.newRecipe.ingridients[index];
      this.status = true;
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
  font-family: Nothing You Could Do, sans-serif;
  font-size: 24px;
  color: rgb(216, 4, 4);
}
.user-input-field {
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  background-color: rgb(235, 235, 235);
  font-size: 24px;
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
  list-style: none;
  padding: 20px 0;
  margin: 0;

  .item {
    position: relative;
    display: inline-block;
    align-self: flex-start;
    margin-right: 20px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 25px;
    font-size: 20px;
    font-family: Nothing You Could Do, sans-serif;
    min-width: 80px;
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