import Logo from "../Logo/Logo";
import React, { useState } from "react";

const pages = [
  {
    page: "Home",
    href: "www.google.it",
  },
  {
    page: "Storia",
    href: "storia_anchor",
  },
  {
    page: "Prodotti",
    href: "prodotti_anchor",
  },
  {
    page: "Contatti",
    href: "contatti_anchor",
  },
];

const Nav = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (href) => {
    setIsMenuOpen(!isMenuOpen);

    var tendina = document.getElementById("tendina");
    var image = document.getElementById("burger-icon");

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      image.setAttribute("src", "/Img/burger_closed.svg");
      tendina.classList.remove("tendina_burger_hide");
      tendina.classList.add("tendina_burger_show");
    } else if (isMenuOpen) {
      document.body.style.overflow = "visible";
      image.setAttribute("src", "/Img/burger.svg");
      tendina.classList.remove("tendina_burger_show");
      tendina.classList.add("tendina_burger_hide");

      // Scroll to view
      if (href) {
        setTimeout(() => {
          document.getElementById(href).scrollIntoView();
        }, 800);
      }
    }
  };

  return (
    <div>
      <div className="navbar w-full flex bg-white h-[60px] fixed z-50 shadow-md shadow-[#0000001a]">
        <div className="w-full flex px-6 my-auto">
          <Logo variant={"Primary"} />

          <div className="w-full relative">
            <img
              onClick={() => toggleMenu()}
              id="burger-icon"
              className="absolute right-0 cursor-pointer"
              src="/Img/burger.svg"
              alt="burger"
            />
          </div>
        </div>
        <div
          id="tendina"
          className="h-0 mt-[58px] absolute w-full bg-primary z-50 overflow-hidden"
        >
          <div className="h-screen flex justify-center md:justify-start items-center -translate-y-20 md:translate-x-[10%]">
            <div>
              {pages.map((page) => (
                <p
                  key={page}
                  onClick={() => toggleMenu(page.href)}
                  className="font-montserrat uppercase text-[40px] sm:text-[50px] md:text-[60px] font-light text-white hover:text-secondary mx-6 my-8 cursor-pointer text-left"
                >
                  {page.page}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
