import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MenShopPage from "./Pages/MenShopPage.jsx";
import Favorites from "./Pages/Favorites.jsx";
import Cart from "./Pages/Cart.jsx";

import "./App.css";
import favorites from "./Pages/Favorites.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MenShopPage />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
