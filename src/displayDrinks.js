import get from "./getElement.js";

const displayDrinks = ({ drinks }) => {
  const section = get(".section-center"),
    title = get(".title");

  console.log(drinks);

  if (!drinks) {
    //hide loading
    title.textContent = `sorry, no drinks matched your search.`;
    section.innerHTML = null;

    return;
  }

  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;

      return ` <!-- single drink -->
    <a href="drink.html">
      <article class="cocktail" data-id="${id}">
        <img src="${img}" alt="${name}">
        <h3>${name}</h3>
      </article>
    </a>
    <!-- end of single drink -->`;
    })
    .join("");

  // hide loading
  title.textContent = ``;
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
