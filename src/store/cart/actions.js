export async function fetchData({ commit }) {
  try {
    const res = await fetch("./api/shop.json");
    const products = await res.json();
    commit("setProducts", products);
  } catch (error) {
    console.log("error", error);
  }
}
export function addProductToCart(context, product) {
  const cartItems = context.state.cart.find((item) => item.id === product.id);

  if (!cartItems) {
    context.commit("pushProductToCart", product);
  } else {
    context.commit("incrementCartItemQuantity", cartItems);
  }

  const productItem = context.state.products.find(
    (item) => item.id === product.id
  );
  context.commit("decrementProductInventory", productItem);
}
export function decreaseCartProduct(context, cart) {
  const cartItems = context.state.cart.find((item) => item.id === cart.id);
  if (cartItems) {
    context.commit("decreaseCartProduct", cartItems);
    const productItem = context.state.products.find(
      (item) => item.id === cart.id
    );
    context.commit("incrementProductInventory", productItem);
  }
}
export function removeItemProductCart(context, cart) {
  const cartItems = context.state.cart.find((item) => item.id === cart.id);
  if (cartItems) {
    const productItem = context.state.products.find(
      (item) => item.id === cart.id
    );

    context.commit("removeItemCart", { cartItems, productItem });
  }
}
export function clearCart(context, cart) {
  context.commit("clearCart", cart);
}
