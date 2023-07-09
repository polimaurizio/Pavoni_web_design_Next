import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
/* eslint-disable @next/next/no-img-element */

const cardContent = [
  {
    img: "/Img/macchina_caffe_1.jpeg",
    title: "Esperto Edotto",
    text: "Il nuovo modello di punta delle macchine a leva domestiche.",
  },
  {
    img: "/Img/macchina_caffe_2.jpeg",
    title: "Esperto Competenze",
    text: "Materiali pregiati e possibilità di controllo costante della...",
  },
  {
    img: "/Img/macchina_caffe_3.jpeg",
    title: "Esperto Abile",
    text: "Macchina da competizione per gli specialisti dell’Espresso.",
  },
  {
    img: "/Img/macchina_caffe_4.jpeg",
    title: "EXPO 2015",
    text: "La Pavoni presenta tre nuovi modelli dedicati all’evento internazionale 2015.",
  },
  {
    img: "/Img/macchina_caffe_5.jpeg",
    title: "Stradivari professional",
    text: "I modelli Europiccola e Professional rappresentano la massima espressione di tecnologia...",
  },
  {
    img: "/Img/macchina_caffe_6.jpeg",
    title: "Professional gold",
    text: "I modelli Europiccola e Professional rappresentano la massima espressione di tecnologia e materiali pregiati...",
  },
  {
    img: "/Img/macchina_caffe_3.jpeg",
    title: "Professional lusso",
    text: "I modelli Europiccola e Professional rappresentano la massima espressione di tecnologia e materiali pregiati.",
  },
];

export const Card = ({}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //container: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 0.3], ["5%", "0%"]);

  return (
    <div className="w-full pt-20 grid grid-cols-12 gap-5">
      <h1 className="col-start-2 col-end-12 text-[50px] sm:text-[70px] mb-10 md:mb-16 font-light font-montserrat text-primary">
        I nostri prodotti
      </h1>
      <div className="w-full h-min pl-[9%] col-start-1 col-end-13 no-scrollbar overflow-x-scroll">
        <motion.div ref={ref} style={{ x }}>
          <div className="flex">
            {cardContent.map((content, index) => (
              <div
                key={index}
                className="bg-[#f9f9f9] relative h-[430px] min-w-[250px] w-[280px] mr-10 rounded-md border border-primary border-opacity-5"
              >
                <img
                  src={content.img}
                  alt={"products_" + index}
                  className="rounded-tl-md rounded-tr-md"
                />
                <div className="p-5 font-montserrat text-primary">
                  <h1 className="font-semibold">{content.title}</h1>
                  <p className="pt-2 text-xs">{content.text}</p>
                  <div className="absolute bottom-5 right-5">
                    <button
                      className="py-2 px-4 text-xs h-min bg-[#f2f2f2] hover:bg-primary hover:text-white rounded-full"
                      href="#"
                    >
                      Scegli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
