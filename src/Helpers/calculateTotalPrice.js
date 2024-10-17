export default function calculateTotalPrice() {
  let total = 0;
  const cartData = sessionStorage.getItem("cart");

  let cartItems = JSON.parse(cartData);
  let cartItemsValues = Object.values(cartItems);

  cartItemsValues.map((item) => {
    total += +item.price;
  });
  return total;
}

export function updateTotalPrice() {
  const totalPriceElement = document.querySelector(".total__total__price");

  const totalPrice = calculateTotalPrice();

  totalPriceElement.innerHTML = `${totalPrice} грн`;
}
