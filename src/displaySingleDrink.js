import { hideloading } from "./toggleLoading.js";
import get from "./getElement.js";

const singleDrinkSection = get(".single-drink");

const displaySingleDrink = (data) => {
  const theDrink = data.drinks[0];
  const { strDrinkThumb: img, strDrink: name, strInstructions: des } = theDrink;

  hideloading();

  singleDrinkSection.innerHTML = `<img src="${img}" alt="${name}" class="drink-img">
  <article class="drink-info">
    <h2 class="drink-name">${name}</h2>
    <p class="drink-desc">${des}</p>
    <ul class="drink-ingredients"><a href="index.html" class="btn">all cocktails</a></ul>`;
};

export default displaySingleDrink;
