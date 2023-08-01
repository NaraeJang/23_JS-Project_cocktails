import fetchDrinks from "./src/fetchDrinks.js";

import displaySingleDrink from "./src/displaySingleDrink.js";

const id = localStorage.getItem("drink");
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchDrinks(url);

  //   display drink
  displaySingleDrink(data);
});
