<template>
    <div class="ingridient">
        <input class="user-input-field name" required type="text" placeholder="Name" v-model="ingridient.name">
        <input class="user-input-field price" required type="number" placeholder="Price" v-model="ingridient.price">
        <input class="user-input-field quantity" required type="number" placeholder="Quantity" v-model="ingridient.quantity.number">
        <select class="user-input-field unit" required v-model="ingridient.quantity.unit" >
            <option value="" disabled selected>Unit type</option>
            <option  v-for="(option, index) in optionList" :value="option.value" :key="index">{{ option.value }}</option>
        </select>
        <input class="user-input-field button" type="button" :value="action" @click="setIngridient(ingridient)">
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { INGREDIENT_SUBMIT_ERORS, getErrorMessage } from "./errors";
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
      optionList: [{ value: "unit" }, { value: "gramm" }, { value: "liter" }]
    };
  },
  methods: {
    ...mapActions(["showPopup"]),
    setIngridient(ingridient) {
      const { isVerified, invalidFileds } = this.verify();

      if (isVerified) {
        this.$emit(this.action, { ingridient });
        this.clearIngridient();
      } else {
        const errorMessage = getErrorMessage(
          invalidFileds,
          INGREDIENT_SUBMIT_ERORS
        );
        this.showPopup({ body: errorMessage });
      }
    },
    verify() {
      const filedsStatus = validate(this.ingridient);
      const quantityStatus = validate(this.ingridient.quantity);
      const isVerified = filedsStatus.isValid && quantityStatus.isValid;
      const invalidFileds = [
        ...filedsStatus.invalidFileds,
        ...quantityStatus.invalidFileds
      ];
      return { isVerified, invalidFileds };
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
  }
};

function validate(object) {
  const invalidFileds = [];
  const isValid = Object.keys(object).every(key => {
    const result = isNotEmpty(object[key]);
    result || invalidFileds.push(key);
    return result;
  });
  return { isValid, invalidFileds };
}
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