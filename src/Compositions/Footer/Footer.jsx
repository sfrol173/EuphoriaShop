import React from "react";

import FooterNav from "./FooterNav.jsx";
import FooterSocialMedia from "./FooterSocialMedia.jsx";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <FooterNav />
      <FooterSocialMedia />
      <p className={"footer-copyright"}>
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
