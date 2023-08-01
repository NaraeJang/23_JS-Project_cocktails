import fetchDrinks from "./src/fetchDrinks.js";
import get from "./src/getElement.js";
import { hideloading } from "./src/toggleLoading.js";

const id = localStorage.getItem("drink");
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
const singleDrinkSection = get(".single-drink");

window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchDrinks(url);
  const theDrink = data.drinks[0];

  //   display drink
  const { strDrinkThumb: img, strDrink: name, strInstructions: des } = theDrink;

  hideloading();

  singleDrinkSection.innerHTML = `<img src="${img}" alt="${name}" class="drink-img">
  <article class="drink-info">
    <h2 class="drink-name">${name}</h2>
    <p class="drink-desc">${des}</p>
    <ul class="drink-ingredients"><a href="index.html" class="btn">all cocktails</a></ul>`;
});
