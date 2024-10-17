import React, { useEffect, useState } from "react";
import { sendRequest } from "../../Helpers/sendRequest.js";

import ProductCard from "../ProductCard/ProductCard.jsx";
import ListContainer from "../../Components/ListContainer/ListContainer.jsx";

const RenderProductsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    sendRequest("../public/data.json").then((data) => {
      setData([...data.products]);
    });
  }, []);

  return (
    <ListContainer classNames={"products-container"}>
      {data?.map((card) => (
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
