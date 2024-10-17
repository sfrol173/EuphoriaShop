import React from "react";

import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import ListItem from "../../Components/ListItem/ListItem.jsx";
import Link from "../../Components/Link/Link.jsx";

const Aside = () => {
  return (
    <>
      <aside className={"aside"}>
        <ListContainer classNames={"aside__nav"}>
          <ListItem>
            <Link classNames={"aside__nav-item"} children={"Shirts"} />
          </ListItem>
          <ListItem>
            <Link
              classNames={"aside__nav-item"}
              children={"Printed T-Shirts"}
            />
          </ListItem>
          <ListItem>
            <Link classNames={"aside__nav-item"} children={"Plain T-Shirt"} />
          </ListItem>
          <ListItem>
            <Link classNames={"aside__nav-item"} children={"Polo T-Shirt"} />
          </ListItem>
          <ListItem>
            <Link classNames={"aside__nav-item"} children={"Coats & Parkas"} />
          </ListItem>
          <ListItem>
            <Link
              classNames={"aside__nav-item"}
              children={"Hoodies & Sweetshirt"}
            />
          </ListItem>
          <ListItem>
            <Link classNames={"aside__nav-item"} children={"Jeans"} />
          </ListItem>
          <ListItem>
            <Link classNames={"aside__nav-item"} children={"Activewear"} />
          </ListItem>
          <ListItem>
            <Link classNames={"aside__nav-item"} children={"Boxers"} />
          </ListItem>
        </ListContainer>
      </aside>
    </>
  );
};

export default Aside;
