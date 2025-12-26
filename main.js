import { products } from "./data/products.js";

const container = document.getElementById("product-list");

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


// 按钮筛选
document.querySelectorAll(".filters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const region = btn.dataset.region;

    if (region === "all") {
      renderProducts(products);
    } else {
      const filtered = products.filter(
        (p) => p.region === region
      );
      renderProducts(filtered);
    }
  });
});

const defaultBtn = document.querySelector('.filters button[data-region="all"]');
defaultBtn.classList.add("active");

