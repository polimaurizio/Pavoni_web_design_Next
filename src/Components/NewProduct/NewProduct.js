/* eslint-disable @next/next/no-img-element */
import CustomButton from "../CustomButton/CustomButton";

export const NewProduct = ({}) => {
  return (
    <div className="grid grid-cols-12 gap-5 pt-24">
      <div className="col-start-1 col-end-6 hidden md:block">
        <img src="/Img/img_1.jpg" alt="caffe_machine" />
      </div>
      <div className="pl-10 my-auto align-bottom col-start-1 md:col-start-7 col-end-12 font-light font-montserrat">
        <h1 className="text-[50px] sm:text-[70px] mb-10 md:mb-16 text-primary">
          Nuovi prodotti
        </h1>
        <p className="leading-7 text-primary">
          Dalla metà degli anni Ottanta l’Azienda si è impegnata nello studio di
          nuove soluzioni ed alla realizzazione di pannellature in materiali
          termoplastici, che consentono un notevole snellimento del ciclo
          produttivo. All’ergonomia è stata dedicata una particolare
          attenzione...
        </p>
        <CustomButton href={"#"} className={"pt-14 md:pt-10"}>
          Scopri di più
        </CustomButton>
      </div>
    </div>
  );
};

export default NewProduct;
