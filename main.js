import { products } from "./data/products.js";

const container = document.getElementById("product-list");

function renderProducts(region) {
  container.innerHTML = "";

  const filtered =
    region === 'all'
      ? products
      : products.filter(p => p.region === region);

  filtered.forEach(product => {
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


const defaultBtn = document.querySelector('.filters button[data-region="all"]');
defaultBtn.classList.add("active");

renderProducts('all');

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    renderProducts(btn.dataset.region);

    document.querySelectorAll(".filter-btn").forEach(b => {
      b.classList.remove("active");
    });

    btn.classList.add("active");
  });
});



