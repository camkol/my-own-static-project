document.addEventListener("DOMContentLoaded", () => {
  fetchItems();
});

const itemForm = document.querySelector("#itemForm");
const listContainer = document.querySelector("#list");

itemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const itemInput = itemForm.elements.name;
  const priceInput = itemForm.elements.price;
  addItem(itemInput.value, priceInput.value);
  itemInput.value = "";
  priceInput.value = "";
});

const fetchItems = async () => {
  const response = await fetch("/api/items");
  const items = await response.json();
  items.forEach((item) => addItemToDOM(item.name, item.price));
};

const addItem = async (name, price) => {
  const response = await fetch("/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  });

  if (response.ok) {
    const newItem = await response.json();
    addItemToDOM(newItem.name, newItem.price);
  }
};

const addItemToDOM = (name, price) => {
  const newItem = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(name);
  newItem.append(bTag);
  newItem.append(`- $${price}`);
  listContainer.append(newItem);
};

listContainer.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove();
});
