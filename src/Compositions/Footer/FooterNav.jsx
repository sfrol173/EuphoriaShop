import React from "react";

import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import ListItem from "../../Components/ListItem/ListItem.jsx";
import Link from "../../Components/Link/Link.jsx";

const FooterNav = () => {
  return (
    <div className={"footer-navigation"}>
      <ListContainer classNames={"nav-list"}>
        <ListItem classNames={"nav-list__title"} children={"Need Help"} />
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Contact Us"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Track Order"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Returns & Refunds"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"FAQ's"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Career"} />
        </ListItem>
      </ListContainer>

      <ListContainer classNames={"nav-list"}>
        <ListItem classNames={"nav-list__title"} children={"Company"} />
        <ListItem>
          <Link classNames={"nav-list__item"} children={"About Us"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"euphoria Blog"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"euphoriastan"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Collaboration"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Media"} />
        </ListItem>
      </ListContainer>

      <ListContainer classNames={"nav-list"}>
        <ListItem classNames={"nav-list__title"} children={"More Info"} />
        <ListItem>
          <Link
            classNames={"nav-list__item"}
            children={"Term and Conditions"}
          />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Privacy Policy"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Shipping Policy"} />
        </ListItem>
        <ListItem>
          <Link classNames={"nav-list__item"} children={"Sitemap"} />
        </ListItem>
      </ListContainer>

      <ListContainer classNames={"nav-list"}>
        <ListItem classNames={"nav-list__title"} children={"Location"} />
        <ListItem
          classNames={"nav-list__item"}
          children={"support@euphoria.in"}
        />
        <ListItem
          classNames={"nav-list__item"}
          children={"Eklingpura Chouraha, Ahmedabad Main Road"}
        />
        <ListItem
          classNames={"nav-list__item"}
          children={"(NH 8- Near Mahadev Hotel) Udaipur, India- 313002"}
        />
      </ListContainer>
    </div>
  );
};

export default FooterNav;
