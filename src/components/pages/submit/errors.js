export const SUBMIT_ERRORS = {
  FILE: "select recipe preview image",
  TITLE: "choose Title for the recipe",
  INGREDIENTS: "add, at least one ingredient",
  DIRECTIONS: "fill the directions",
  USER: "enter your name"
};

export const INGREDIENT_SUBMIT_ERORS = {
  NAME: "add the name for ingredient",
  PRICE: "set the price of ingredient",
  NUMBER: "enter the ingredient' quantity",
  UNIT: "select the unit type of ingredient"
};

export function getErrorMessage(fields, errorList) {
  return fields.reduce((result, prop) => {
    const errorPhrase = errorList[prop.toUpperCase()];
    const separator = (fields.length = 1 ? "" : "and");
    return `${result}${separator} ${errorPhrase}`;
  }, "Please");
}
