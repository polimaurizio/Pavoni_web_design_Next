/* eslint-disable @next/next/no-img-element */
import { React, useRef } from "react";
import CustomButton from "../Button/Button";

const History = () => {
  return (
    <div className="grid grid-cols-12 gap-5 w-full">
      <h1
        className={
          "mt-16 mb-10 md:mb-16 sm:mt-20 font-light text-primary text-[50px] sm:text-[70px] font-montserrat col-start-2 col-span-10"
        }
      >
        La nostra storia
      </h1>

      <div className="col-start-1 col-end-6 bg-cover hidden md:flex">
        <img
          className="w-full h-full object-cover grayscale"
          src="/Img/colored/story_img_7.jpg"
          alt="story_img"
        />
      </div>

      <div
        className={
          "col-start-2 md:col-start-7 col-end-12 items-center h-full flex font-montserrat font-light text-sm sm:text-sm xl:text-base"
        }
      >
        <div className="w-full">
          <p className="leading-7 text-primary">
            Dalla metà degli anni Ottanta l’Azienda si è impegnata nello studio
            di nuove soluzioni ed alla realizzazione di pannellature in
            materiali termoplastici, che consentono un notevole snellimento del
            ciclo produttivo. All’ergonomia è stata dedicata una particolare
            attenzione, come d’altra parte alla ricerca di soluzioni
            tecnologiche e sviluppo di nuovi prodotti.
          </p>
          <CustomButton href={"#"} className={"pt-10"}>
            Scopri di più
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default History;
