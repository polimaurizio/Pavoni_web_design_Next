import { React, useRef } from "react";
import classNames from "classnames";
import { useScroll, useTransform, motion } from "framer-motion";

const Gallery = ({ className }) => {
  let classes = classNames("", className);

  const links = [
    "story_img_1.jpeg",
    "story_img_2.jpeg",
    "story_img_3.jpeg",
    "story_img_4.jpeg",
    "story_img_5.jpeg",
    "story_img_6.jpeg",
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //container: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 0.3], ["10%", "0%"]);

  return (
    <div
      className={
        "w-full bg-primary pt-5 pb-24 mt-20 overflow-hidden grid grid-cols-12 gap-5"
      }
    >
      <div className="flex flex-wrap w-full relative col-start-2">
        <h1
          className={
            "text-[60px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-montserrat font-light text-white"
          }
        >
          Galleria
        </h1>
      </div>

      <motion.div
        ref={ref}
        style={{ x }}
        className={
          "pt-5 flex h-56 sm:h-64 md:h-72 lg:h-80 col-start-1 col-end-13"
        }
      >
        <div className="flex no-scrollbar overflow-x-scroll pl-[9%] space-x-5">
          {links.map((link) => (
            <img
              key={link}
              className={
                "drop-shadow-xl mb-5 [&:not(:hover)]:grayscale transition-all easy-in duration-300"
              }
              alt={link}
              src={"/Img/colored/" + link}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
