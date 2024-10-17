import React, { useState } from "react";

import { getFavoriteItemCount } from "../Helpers/itemsCounter.js";
import { getCartItemCount } from "../Helpers/itemsCounter.js";

import Header from "../Compositions/Header/Header.jsx";
import Main from "../Compositions/Main/Main.jsx";
import Footer from "../Compositions/Footer/Footer.jsx";

const MenShopPage = () => {
  const [inFavorite, setInFavorite] = useState(getFavoriteItemCount);
  const [inCart, setInCart] = useState(getCartItemCount);

  return (
    <>
      <Header inFavorite={inFavorite} inCart={inCart} />
      <Main />
      <Footer />
    </>
  );
};

export default MenShopPage;
