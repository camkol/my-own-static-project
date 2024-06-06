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

const addItem = (username, tweet) => {
  const newItem = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newItem.append(bTag);
  newItem.append(`- ${tweet}`);
  listContainer.append(newItem);
};

listContainer.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove();
});
