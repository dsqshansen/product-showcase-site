import { products } from "./data/products.js";

const container = document.getElementById("product-list");
const buttons = document.querySelectorAll(".filter-btn");

/**
 * 渲染商品
 */
function renderProducts(region) {
  container.innerHTML = "";

  const filtered =
    region === "all"
      ? products
      : products.filter(p => p.region === region);

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
div.innerHTML = `
  <div class="status">
    ${product.available ? "ON" : "OFF"}
  </div>
  <img src="${product.image}" alt="${product.name}">
  <h3>${product.name}</h3>
  <p>${product.description}</p>
`;
    container.appendChild(div);
  });
}

/**
 * 设置按钮高亮
 */
function setActiveButton(region) {
  buttons.forEach(btn => {
    if (btn.dataset.region === region) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

/**
 * 绑定按钮点击事件
 */
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const region = btn.dataset.region;
    renderProducts(region);
    setActiveButton(region);
  });
});

/**
 * 页面初始化
 */
renderProducts("all");
setActiveButton("all");
