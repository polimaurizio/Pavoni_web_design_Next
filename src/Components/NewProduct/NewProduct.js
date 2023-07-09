/* eslint-disable @next/next/no-img-element */
import CustomButton from "../Button/Button";

export const NewProduct = ({}) => {
  return (
    <div className="grid grid-cols-12 gap-5 pt-24">
      <div className="col-start-1 col-end-7 hidden md:block">
        <img src="/Img/macina_caffe_1.jpeg" alt="caffe_machine mirror_image" />
      </div>
      <div className="pl-10 my-auto align-bottom col-start-1 md:col-start-7 col-end-12 font-light font-montserrat">
        <h1 className="text-[50px] sm:text-[70px] mb-10 md:mb-16 text-primary">
          Nuovi prodotti
        </h1>
        <p className="leading-7 text-primary">
          Il macinacaffè ha un contenitore per caffè in grani con capacità di
          250 gr. e consente un’ampia regolazione della macinatura del caffè.
        </p>
        <CustomButton href={"#"} className={"pt-14 md:pt-10"}>
          Scopri di più
        </CustomButton>
      </div>
    </div>
  );
};

export default NewProduct;
