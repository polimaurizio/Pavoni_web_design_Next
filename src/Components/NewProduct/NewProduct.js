import CustomButton from "../CustomButton/CustomButton";

export const NewProduct = () => {
  return (
    <div className="w-full h-[30vh] flex col-start-0 col-end-13">
      <div className="h-10 w-[50%]">
        <img src="/Img/img_1.jpg" alt="caffe_machine" />
      </div>
      <div className="w-[50%] pl-5 h-full my-auto align-bottom">
        <h1 className="text-[80px] text-primary">Nuovi prodotti</h1>
        <p>
          Dalla metà degli anni Ottanta l’Azienda si è impegnata nello studio di
          nuove soluzioni ed alla realizzazione di pannellature in materiali
          termoplastici, che consentono un notevole snellimento del ciclo
          produttivo. All’ergonomia è stata dedicata una particolare
          attenzione...
        </p>
        <CustomButton href={"#"} className="">
          Scopri di più
        </CustomButton>
      </div>
    </div>
  );
};

export default NewProduct;
