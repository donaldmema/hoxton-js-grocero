let state = {
  products: [
    { id: 1, name: "beetroot", price: 0.35, inCart: 0 },
    { id: 2, name: "carrot", price: 0.25, inCart: 0 },
    { id: 3, name: "apple", price: 0.15, inCart: 0 },
    { id: 4, name: "apricot", price: 0.25, inCart: 0 },
    { id: 5, name: "avocado", price: 0.15, inCart: 0 },
    { id: 6, name: "bananas", price: 0.15, inCart: 0 },
    { id: 7, name: "bell-pepper", price: 0.15, inCart: 0 },
    { id: 8, name: "berry", price: 0.15, inCart: 0 },
    { id: 9, name: "blueberry", price: 0.15, inCart: 0 },
    { id: 10, name: "eggplant", price: 0.15, inCart: 0 },
  ],
};

function getImgSrc(product) {
  let imgId = String(product.id).padStart(3, "0");
  let imgName = product.name + ".svg";
  return "./assets/icons/" + imgId + "-" + imgName;
}

function getTotal() {
  let cartProducts = getCartProducts();

  let total = 0;

  for (let product of cartProducts) {
    total += product.price * product.inCart;
  }

  return total;
}

function getCartProducts() {
  let cartProducts = state.products.filter((product) => product.inCart > 0);
  return cartProducts;
}

function addToCart() {
  //could be the same as increaseQuantity
}
function increaseQuantity(product) {
  product.inCart++;
}
function decreaseQuantity(product) {
  product.inCart--;
}

function renderStoreProducts() {
  let storeProductsList = document.querySelector(".item-list.store--item-list");
  storeProductsList.textContent = "";

  for (let product of state.products) {
    let productItem = document.createElement("li");

    let productImgDiv = document.createElement("div");
    productImgDiv.className = "store--item-icon";

    let productImg = document.createElement("img");
    productImg.src = getImgSrc(product);
    productImg.alt = product.name;

    let addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.addEventListener("click", () => {
      increaseQuantity(product);
      render();
    });

    productImgDiv.appendChild(productImg);
    productItem.append(productImgDiv, addToCartBtn);
    storeProductsList.append(productItem);
  }
}

function renderCart() {
  //clean ul then render cart
}

function renderTotal() {
  //render total
}

function render() {
  renderStoreProducts();
  renderCart();
  renderTotal();
}
