import React from "react";
import { Carousel, Flowbite } from "flowbite-react";
import { motion } from "framer-motion";

const Carrosello = ({}) => {
  return (
    <div className="h-screen sm:h-screen xl:h-screen relative pt-[60px]">
      <Flowbite
        theme={{
          theme: {
            carousel: {
              indicators: {
                base: "hidden",
              },
              root: {
                rightControl: "hidden",
                leftControl: "hidden",
              },
              scrollContainer: {
                base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth indiana-scroll-container indiana-scroll-container--hide-scrollbars rounded-none",
              },
            },
          },
        }}
      >
        <Carousel slideInterval={4000} className={"-px-[2px]"}>
          <img
            src="/Img/img_1.jpg"
            alt="..."
            loading="eager"
            className={"object-cover h-full "}
          />
          <img
            src="/Img/img_2.jpg"
            alt="..."
            loading="eager"
            className={"object-cover h-full "}
          />
          <img
            src="/Img/img_3.jpg"
            alt="..."
            loading="eager"
            className={"object-cover h-full "}
          />
        </Carousel>
        <div
          className={
            'before:bg-black before:opacity-50 before:inset-0 before:absolute before:content-[""] absolute inset-0 flex justify-center items-center pointer-events-none'
          }
        >
          {/* Framer motion first animation */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className={
              "uppercase font-montserrat text-white  sm:text-[40px] md:text-[50px] lg:text-[60px] text-[30px] z-30 text-center"
            }
          >
            Dal 1905 <br /> macchine per caffè
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-100 justify-center flex -translate-y-24"
        >
          <img
            className="fas fa-chevron-down"
            src="/Img/down-arrow.svg"
            alt="down-arrow"
          />
        </motion.div>
      </Flowbite>
    </div>
  );
};

export default Carrosello;
