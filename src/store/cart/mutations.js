import state from "./state";

export function setProducts(state, payload) {
  state.products = payload;
}
export function pushProductToCart(state, product) {
  state.cart.push({
    id: product.id,
    quantity: 1,
  });
  state.itemCart++;
}
export function incrementCartItemQuantity(state, cartItems) {
  cartItems.quantity++;
  state.itemCart++;
}
export function decreaseCartProduct(state, cartItems) {
  cartItems.quantity--;
  state.itemCart--;
}
export function decrementProductInventory(state, product) {
  product.inventory--;
}
export function incrementProductInventory(state, product) {
  product.inventory++;
}
export function removeItemCart(state, { cartItems, productItem }) {
  state.cart = state.cart.filter((item) => item.id != cartItems.id);
  state.itemCart -= cartItems.quantity;

  productItem.inventory += cartItems.quantity;
}
export function clearCart(state, cart) {
  Object.keys(cart).forEach((key) => {
    const productItem = state.products.find((item) => item.id === cart[key].id);

    if (productItem) {
      productItem.inventory += cart[key].quantity;
    }
  });

  state.cart = [];
  state.itemCart = 0;
}
export function updateSale(state) {
 
  state.sale = !state.sale;
}
export function updateHighPrice(state, event) {
  state.highPrice = event;
}
