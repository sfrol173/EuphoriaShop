import React, { useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard.jsx";
import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import { fetchProductCards } from "../../store/slices/shop.slice.js";
import { useSelector, useDispatch } from "react-redux";
import { selectorProductCards } from "../../store/selectors.js";

const RenderProductsList = () => {
  const productCards = useSelector(selectorProductCards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCards());
  }, []);

  return (
    <ListContainer classNames={"products-container"}>
      {productCards.map((card) => (
        <ProductCard
          key={card.article}
          imageURL={card.photoUrl}
          price={card.price}
          category={card.category}
          name={card.name}
          article={card.article}
        />
      ))}
    </ListContainer>
  );
};

export default RenderProductsList;
