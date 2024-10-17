import React, { useEffect, useState } from "react";
import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import Title from "../../Components/Title/Title.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";

const MainFavorites = () => {
  const [hasFavorites, setHasFavorites] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState({});
  const [isFavoritePageActive, setIsFavoritePageActive] = useState(true);

  useEffect(() => {
    const storedFavorites = sessionStorage.getItem("favorite");

    if (!storedFavorites || storedFavorites === "{}") {
      setHasFavorites(false);
      setFavoriteItems([]);
    } else {
      const favoriteArticles = JSON.parse(storedFavorites);
      setHasFavorites(true);
      setFavoriteItems(Object.values(favoriteArticles));
    }
  }, []);

  return (
    <main>
      {!hasFavorites && (
        <Title classNames={"favorites-empty"} children={"Favorites is empty"} />
      )}
      {hasFavorites && (
        <ListContainer classNames={"products-container"}>
          {favoriteItems?.map((card) => (
            <ProductCard
              key={card.article}
              imageURL={card.imageUrl}
              price={card.price}
              category={card.category}
              name={card.name}
              article={card.article}
              isFavoritePage={isFavoritePageActive}
            />
          ))}
        </ListContainer>
      )}
    </main>
  );
};

export default MainFavorites;
