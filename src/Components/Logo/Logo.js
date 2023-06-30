import React from "react";

const LogoVariants = {
  primary: "Primary",
  secondary: "Secondary",
};

const Logo = ({ variant }) => {
  if (variant === LogoVariants.primary) {
    return (
      <img
        width="130px"
        height="auto"
        src="/Loghi/logo_pavoni.png"
        alt="logo"
      />
    );
  }

  return (
    <img
      width="130px"
      height="auto"
      src="/Loghi/logo_pavoni_white.png"
      alt="logo"
    />
  );
};

export default Logo;
