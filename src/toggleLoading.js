import get from "./getElement.js";

const loading = get(".loading");

export const showloading = () => {
  loading.classList.remove("hide-loading");
};

export const hideloading = () => {
  loading.classList.add("hide-loading");
};
