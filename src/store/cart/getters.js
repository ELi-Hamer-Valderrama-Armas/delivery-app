import state from "./state";
export function cartProducts(state) {
  return state.cart.map((cartItem) => {
    const product = state.products.find((item) => item.id === cartItem.id);
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      category:product.category,
      inventory:product.inventory,
      quantity: cartItem.quantity,
    };
  });
}
export function cartTotal(state,getters){
   return getters.cartProducts.reduce((total,product)=>total+product.price * product.quantity,0)
}
