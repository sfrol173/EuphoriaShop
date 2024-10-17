const getCartData = () => {
  const cartData = sessionStorage.getItem("cart");
  if (cartData === null || cartData.length === 0 || cartData === "{}") {
    return 0;
  } else {
    return JSON.parse(cartData);
  }
};

export const getCartItemCount = () => {
  return Object.keys(getCartData()).length;
};

export const updateCartItemCountDisplay = () => {
  const cart = document.querySelector(".cart-num");
  if (getCartData() === 0) {
    cart.innerText = 0;
  } else {
    cart.innerText = Object.keys(getCartData()).length;
  }
};

export const getFavoriteData = () => {
  const favoriteData = sessionStorage.getItem("favorite");
  if (
    favoriteData === null ||
    favoriteData.length === 0 ||
    favoriteData === "{}"
  ) {
    return 0;
  } else {
    return JSON.parse(favoriteData);
  }
};

export const getFavoriteItemCount = () => {
  return Object.keys(getFavoriteData()).length;
};

export const updateFavoriteItemCount = () => {
  const favorite = document.querySelector(".favorite-num");

  if (getFavoriteData() === 0) {
    favorite.innerText = 0;
  } else {
    favorite.innerText = Object.keys(getFavoriteData()).length;
  }
};
