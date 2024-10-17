import React from "react";

import Button from "../../Components/Button/Button.jsx";

const FooterSocials = () => {
  return (
    <div className={"footer-socials"}>
      <Button classNames={"footer-socials__item facebook"} />
      <Button classNames={"footer-socials__item instagram"} />
      <Button classNames={"footer-socials__item twitter"} />
      <Button classNames={"footer-socials__item linkedin"} />
    </div>
  );
};

export default FooterSocials;
