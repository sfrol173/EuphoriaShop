import React, { useEffect, useState } from "react";
import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import Title from "../../Components/Title/Title.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import Text from "../../Components/Text/Text.jsx";
import Button from "../../Components/Button/Button.jsx";
import calculateTotalPrice from "../../Helpers/calculateTotalPrice.js";
import "./Main.scss";

const CartPage = () => {
  const [hasItemsInCart, setHasItemsInCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartView, setIsCartView] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let cartData = sessionStorage.getItem("cart");

    if (cartData === null || cartData === "{}") {
      setHasItemsInCart(false);
      setCartItems([]);

      return;
    } else {
      let parsedCartData = JSON.parse(cartData);
      setHasItemsInCart(true);
      setCartItems(Object.values(parsedCartData));
      setTotalPrice(calculateTotalPrice());
    }
  }, []);

  return (
    <main className={hasItemsInCart ? "cart-main" : ""}>
      {!hasItemsInCart && (
        <Title classNames={"cart-empty"} children={"Cart is empty"} />
      )}
      {hasItemsInCart && (
        <ListContainer classNames={"products-container cart-container"}>
          {cartItems?.map((item) => (
            <ProductCard
              key={item.article}
              imageURL={item.imageUrl}
              price={item.price}
              category={item.category}
              name={item.name}
              article={item.article}
              isCartPage={isCartView}
            />
          ))}
        </ListContainer>
      )}
      {hasItemsInCart && (
        <div className={"total"}>
          <Text classNames={"total__summary"} children={"Summary"} />

          <Text classNames={"total__total"}>
            Total
            <span className={"total__total__price"}>
              {":  "}
              {totalPrice + " грн"}
            </span>
          </Text>
          <Button
            classNames={"cart-buy__button"}
            type={"button"}
            children={"Buy"}
          />
        </div>
      )}
    </main>
  );
};

export default CartPage;
