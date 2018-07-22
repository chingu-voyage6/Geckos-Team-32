<template>
    <div class="ingridient">
        <input class="user-input-field name" required type="text" placeholder="Ingridient" 
               v-model="ingridient.name">
         <input class="user-input-field price" required type="number" placeholder="Price" 
               v-model="ingridient.price">
        <input class="user-input-field quantity" required type="number" placeholder="Quantity" 
                v-model="ingridient.quantity">
         <select class="user-input-field unit" required v-model="ingridient.unit" >
            <option value="" disabled selected>Unit</option>
            <option value="gram"> gram</option>
            <option value="Kg">Kg</option>
        </select>
        <input class="user-input-field button" type="button" value="Add" @click="addIngridient(ingridient)">
    </div>
</template>

<script>
const EMPTY_INGRIDIENT = () => {
  return{
        name: "",
        quantity: "",
        unit: "",
        price: ""
      }
};

export default {
  props: {
    editIngridient: {
      type: Object,
      value: EMPTY_INGRIDIENT()
    },
    edit: {
      type: Boolean,
      value: false
    }
  },
  data: () => {
    return {
      ingridient: EMPTY_INGRIDIENT()
    };
  },
  methods: {
    addIngridient(ingridient) {
      this.$emit("addIngridient", { ingridient });
      this.clearIngridient();
    },
    clearIngridient() {
      this.ingridient = {
        name: "",
        quantity: "",
        unit: "",
        price: ""
      };
    }
  },
  watch: {
    editIngridient: {
      deep: true,
      handler: function(val) {
        this.ingridient = val;
      }
    }
  }
};
</script>

<style scoped>
.ingridient {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.user-input-field:not(:last-child) {
  margin-right: 10px;
  width: 130px;
}
.name {
  flex-grow: 1;
}
.button {
  font-family: Nothing You Could Do, sans-serif;
  color: rgb(216, 4, 4);
  font-weight: bold;
  width: initial;
}
option[value=""][disabled] {
  display: none;
}
</style>