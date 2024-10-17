import React, { useState } from "react";

import { getFavoriteItemCount } from "../Helpers/itemsCounter.js";
import { getCartItemCount } from "../Helpers/itemsCounter.js";

import Header from "../Compositions/Header/Header.jsx";
import MainFavorites from "../Compositions/Main/MainFavorites.jsx";
import Footer from "../Compositions/Footer/Footer.jsx";

const Favorites = () => {
  const [inFavorite, setInFavorite] = useState(getFavoriteItemCount);
  const [inCart, setInCart] = useState(getCartItemCount);

  return (
    <>
      <Header inFavorite={inFavorite} inCart={inCart} />
      <MainFavorites />
      <Footer />
    </>
  );
};

export default Favorites;
