import React from "react";
import LogoIcon from "./icon/logo.svg?react";

import "./Logo.scss";

const Logo = () => {
  return (
    <a className={"logo"} href={"#"}>
      <LogoIcon />
    </a>
  );
};

export default Logo;
