import { React, useRef } from "react";
import CustomButton from "../Button/Button";

const History = () => {
  return (
    <div
      className={
        "col-start-2 md:col-start-7 col-end-12 items-center h-full flex font-montserrat font-light text-sm sm:text-sm xl:text-base"
      }
    >
      <div className="w-full">
        <p className="leading-7 text-primary">
          Dalla metà degli anni Ottanta l’Azienda si è impegnata nello studio di
          nuove soluzioni ed alla realizzazione di pannellature in materiali
          termoplastici, che consentono un notevole snellimento del ciclo
          produttivo. All’ergonomia è stata dedicata una particolare attenzione,
          come d’altra parte alla ricerca di soluzioni tecnologiche e sviluppo
          di nuovi prodotti.
        </p>
        <CustomButton href={"#"} className={"pt-10"}>
          Scopri di più
        </CustomButton>
      </div>
    </div>
  );
};

export default History;
