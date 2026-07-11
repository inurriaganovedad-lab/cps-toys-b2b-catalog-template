const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".product-card");
const selectedProducts = document.querySelector("#selected-products");
const form = document.querySelector("#inquiry-form");
const formNote = document.querySelector("#form-note");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

document.querySelectorAll(".add-item").forEach((button) => {
  button.addEventListener("click", () => {
    const items = selectedProducts.value.split("\n").map((item) => item.trim()).filter(Boolean);
    if (!items.includes(button.dataset.item)) items.push(button.dataset.item);
    selectedProducts.value = items.join("\n");
    formNote.textContent = `${button.dataset.item} added to your inquiry brief.`;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const quantity = document.querySelector("#quantity").value;
  const market = document.querySelector("#market").value;
  const summary = selectedProducts.value.trim() || "General product sourcing";
  formNote.textContent = `Brief ready: ${summary.replaceAll("\n", ", ")} | ${quantity} units | ${market}. Opening the official CPS Toys contact page...`;
  window.open("https://www.cps-toys.com/contact-us/", "_blank", "noopener");
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
});
