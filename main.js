import { products } from "./data/products.js";

const container = document.getElementById("products-list");

function renderProducts(list) {
  container.innerHTML = "";
  list.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    `;
    container.appendChild(div);
  });
}

renderProducts(products);
