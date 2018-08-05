<template>
    <div class="ingridient">
        <input class="user-input-field name" required type="text" placeholder="Name" v-model="ingridient.name">
        <input class="user-input-field price" required type="number" placeholder="Price" v-model="ingridient.price">
        <input class="user-input-field quantity" required type="number" placeholder="Quantity" v-model="ingridient.quantity.number">
        <select class="user-input-field unit" required v-model="ingridient.quantity.unit" >
            <option value="" disabled selected>Unit</option>
            <option  v-for="(option, index) in optionList" :value="option.value" :key="index">{{ option.value }}</option>
        </select>
        <input class="user-input-field button" type="button" :value="action" @click="setIngridient(ingridient)">
    </div>
</template>

<script>
const EMPTY_INGRIDIENT = () => {
  return {
    name: "",
    price: "",
    quantity: {
      number: "",
      unit: ""
    }
  };
};

export default {
  props: {
    editIngridient: {
      type: Object,
      value: EMPTY_INGRIDIENT()
    },
    action: {
      type: String,
      value: "Add"
    }
  },
  data: () => {
    return {
      ingridient: EMPTY_INGRIDIENT(),
      optionList: [{ value: "unit" }, { value: "gramm" },{ value: "liter"}]
    };
  },
  methods: {
    setIngridient(ingridient) {
      if (this.isVerified) {
        this.$emit(this.action, { ingridient });
        this.clearIngridient();
      }
    },
    clearIngridient() {
      this.ingridient = EMPTY_INGRIDIENT();
    }
  },
  watch: {
    editIngridient: {
      handler: function(val) {
        this.ingridient = JSON.parse(JSON.stringify(val));
      },
      deep: true
    }
  },
  computed: {
    isVerified() {
      const ingridient = this.ingridient;
      const quantity = this.ingridient.quantity;

      const filedsStatus = Object.keys(ingridient).every(key => isNotEmpty(ingridient[key]));
      const quantityStatus = Object.keys(quantity).every(key => isNotEmpty(quantity[key]));

      return filedsStatus && quantityStatus;
    }
  }
};

function isNotEmpty(string) {
  return string != "";
}
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
  width: initial;
  min-width: 4em;
  color: rgb(216, 4, 4);
  font-family: Nothing You Could Do, sans-serif;
  font-weight: bold;
}
option[value=""][disabled] {
  display: none;
}
</style>