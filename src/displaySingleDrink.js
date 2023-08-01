import { hideloading } from "./toggleLoading.js";
import get from "./getElement.js";

const singleDrinkSection = get(".single-drink");

const displaySingleDrink = (data) => {
  hideloading();

  const theDrink = data.drinks[0];
  const { strDrinkThumb: img, strDrink: name, strInstructions: des } = theDrink;
  const list = [
    theDrink.strIngredient1,
    theDrink.strIngredient2,
    theDrink.strIngredient3,
    theDrink.strIngredient4,
    theDrink.strIngredient5,
  ];

  const drinkList = list
    .map((item) => {
      if (!item) return;

      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");

  singleDrinkSection.innerHTML = `<img src="${img}" alt="${name}" class="drink-img">
  <article class="drink-info">
    <h2 class="drink-name">${name}</h2>
    <p class="drink-desc">${des}</p>
    <ul class="drink-ingredients">${drinkList}<a href="index.html" class="btn">all cocktails</a></ul>`;
};

export default displaySingleDrink;
