export function addPizzaToCart(pizzaObj) {
  return {
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
  };
}

export function clearCart() {
  return {
    type: 'CLEAR_CART',
  };
}

export function removeCartItem(id) {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: id,
  };
}

export function plusCartItem(id) {
  return {
    type: 'PLUS_CART_ITEM',
    payload: id,
  };
}

export function minusCartItem(id) {
  return {
    type: 'MINUS_CART_ITEM',
    payload: id,
  };
}
