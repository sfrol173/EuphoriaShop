import React from "react";

import Aside from "../Aside/Aside.jsx";
import Title from "../../Components/Title/Title.jsx";
import RenderProductsList from "../RenderProductsList/RenderProductsList.jsx";

import "./Main.scss";

const Main = () => {
  return (
    <main>
      <Title classNames={"main__title"} children={"Men Shop"} />
      <div className={"main__sections"}>
        <Aside />
        <RenderProductsList />
      </div>
    </main>
  );
};

export default Main;
