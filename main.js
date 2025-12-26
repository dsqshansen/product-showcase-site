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
document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {

    // 清空所有按钮的高亮
    document.querySelectorAll('.filters button')
      .forEach(b => b.classList.remove('active'));

    // 当前点击的按钮变黑
    button.classList.add('active');

    // 执行原有筛选
    const region = button.dataset.region;
    renderProducts(region);
  });
});

const defaultBtn = document.querySelector('.filters button[data-region="all"]');
defaultBtn.classList.add("active");

