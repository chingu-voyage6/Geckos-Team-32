<template>
  <article class="page-wrapper">
    <div class="loader-wrapper" v-if="showLoader">
      <div class="loader"></div>
    </div>
    <section class="submit-form">
      <div class="heading">
        <h2>Your recipe</h2>
      </div>
      <div class="submit-recipe-container">
        <div class="container-item recipe">
          <label class="user-input-label">Title</label>
          <input class="user-input-field" type="text" placeholder="" v-model="newRecipe.Title">
        </div>
        <div class="container-item Ingredients">
          <label class="user-input-label">Ingredients</label>
          <input-ingridient :editIngridient="editedIngridient" 
                            :action="action" 
                            @Add="addIngridient" 
                            @Save="setIngridient"
          ></input-ingridient>
          <ul class="ingridient-list">
            <li class="item" v-for="(ingridient, index) in newRecipe.Ingredients" :key="index">
              <i class="far fa-edit edit" @click="edit(index)"></i>
              <span>{{ ingridient.name }}</span>
              <i class="fas fa-trash-alt remove" @click="remove(index)"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="container-item directions">
        <label class="user-input-label">Directions</label>
        <textarea class="user-input-field" type="text" v-model="newRecipe.Directions"></textarea>
      </div>
      <div class="container-item flex-row" >
        <span class="user-input-label">Select a nickname</span>
        <input class="user-input-field flex-grow" v-model="newRecipe.User" type="text">
      </div>
      <div class="container-item flex-row" >
        <input class="non-visible" type="file" @change="onFileChange" ref="fileInput">
        <span class="user-input-field user-input-label flex-end" @click="$refs.fileInput.click()">Select an image</span>
      </div>
       <div class="container-item flex-row" >
        <button class="user-input-field flex-end" type="button" @click="sumbit">
          <span class="user-input-label">Submit</span>
        </button>
      </div>
    </section>
  </article>
</template>

<script>
import { mapActions } from "vuex";
import { imageUploader } from "@/modules/firebase";
import inputIngridient from "./inputIngridient";
import { ERRORS } from "./errors";

export default {
  components: {
    inputIngridient
  },
  data: () => {
    return {
      newRecipe: {
        Title: "",
        Ingredients: [],
        Directions: "",
        User: ""
      },
      editedIngridient: {},
      action: "Add",
      selected: -1,
      file: {},
      showLoader: false
    };
  },
  methods: {
    ...mapActions(["addRecipe", "showPopup", "updateRecipeField"]),
    addIngridient({ ingridient }) {
      this.newRecipe.Ingredients.push(ingridient);
    },
    setIngridient({ ingridient }) {
      this.newRecipe.Ingredients.splice(this.selected, 1, ingridient);
      this.action = "Add";
    },
    edit(index) {
      this.editedIngridient = this.newRecipe.Ingredients[index];
      this.action = "Save";
      this.selected = index;
    },
    remove(index) {
      this.newRecipe.Ingredients.splice(index, 1);
    },
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      this.file = event.target.files[0];
    },
    sumbit() {
      const newRecipe = this.newRecipe;
      const { isValid, invalidFields } = this.validate();
      if (isValid) {
        let id;
        this.runLoader();
        this.addRecipe(newRecipe)
          .then(doc => (id = doc.id))
          .then(id => imageUploader(this.file.name, id))
          .then(upload => upload(this.file))
          .then(url =>
            this.updateRecipeField({ id, payload: { ImageUrl: url } })
          )
          .then(() => this.clear())
          .then(() => this.stopLoader());
      } else {
        const message = this.getErrorMessage(invalidFields);
        this.showPopup({ body: message });
      }
    },
    validate() {
      let overalStatus, invalidFields = [];
      const recipe = this.newRecipe;
      const fileStatus = !!this.file.name;
      const recipeFieldsStatus = Object.keys(recipe).every(key => {
        const property = recipe[key];
        const status =
          typeof property == Object
            ? isNotEmptyObject(property)
            : isNotEmptyString(property);
        status || invalidFields.push(key);
        return status;
      });

      fileStatus || invalidFields.push("file");
      overalStatus = recipeFieldsStatus && fileStatus;
      return { isValid: overalStatus, invalidFields };
    },
    runLoader() {
      this.showLoader = true;
    },
    stopLoader() {
      this.showLoader = false;
    },
    clear() {
      this.newRecipe.Title = "";
      this.newRecipe.Ingredients = [];
      this.newRecipe.Directions = "";
      this.newRecipe.User = "";
    },
    getErrorMessage(fields) {
      return fields.reduce((result, prop) => {
        const errorPhrase = ERRORS[prop.toUpperCase()]; 
        const separator = (fields.length = 1 ? "" : "and");
        return `${result}${separator} ${errorPhrase}`;
      }, "Please");
    }
  }
};

function isNotEmptyObject(object) {
  return !!Object.keys(object).length;
}

function isNotEmptyString(string) {
  return !!string.length;
}
</script>

<style lang="scss" >
.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: gray;
  opacity: 0.5;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 200px;
  height: 200px;
  animation: spin 2s linear infinite;
  margin: auto;
}

.page-wrapper {
  position: relative;
}

.submit-form {
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  padding: 0 40px;
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

.user-input-field {
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: rgb(235, 235, 235);
  font-size: 16px;
  color: grey;
  outline: 0 !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-input-label {
  color: rgb(216, 4, 4);
  font-family: Nothing You Could Do, sans-serif;
  font-size: 20px;
  font-weight: bold;
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

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flex-end {
  margin-left: auto;
  align-self: flex-end;
}

.flex-grow {
  flex-grow: 0.95;
}

.non-visible {
  display: none;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>