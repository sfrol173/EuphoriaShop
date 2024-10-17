import React, { useState } from "react";

import { getFavoriteItemCount } from "../Helpers/itemsCounter.js";
import { getCartItemCount } from "../Helpers/itemsCounter.js";

import Header from "../Compositions/Header/Header.jsx";
import CartPage from "../Compositions/Main/CartPage.jsx";
import Footer from "../Compositions/Footer/Footer.jsx";

const Favorites = () => {
  const [inFavorite, setInFavorite] = useState(getFavoriteItemCount);
  const [inCart, setInCart] = useState(getCartItemCount);

  return (
    <>
      <Header inFavorite={inFavorite} inCart={inCart} />
      <CartPage />
      <Footer />
    </>
  );
};

export default Favorites;
