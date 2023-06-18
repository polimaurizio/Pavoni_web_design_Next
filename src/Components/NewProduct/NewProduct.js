import React from "react";
import CustomButton from "../CustomButton";

const NewProduct = () => {
  return (
    <section
      className="h-[100vh] sm:h-[100vh] flex flex-wrap"
    >
      <div className="h-full pt-20">
        <div>
          <img
            className="hidden min-[1140px]:block w-[300px]"
            src="Img/macchina_caffe.png"
            alt="macchina_caffe"
          />
        </div>
      </div>

      <div className="mx-auto text-center lg:text-left pt-14 md:pt-72 lg:pl-20">
        <h1 className="text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] font-bold">
          Nuovi prodotti
          <br />a partire dal 2024
        </h1>

        <CustomButton className={"justify-center lg:justify-start"}>
          Scopri di più
        </CustomButton>
      </div>
    </section>
  );
};

export default NewProduct;
