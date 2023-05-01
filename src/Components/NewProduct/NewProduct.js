import React, { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import classNames from 'classnames';
import CustomButton from '../CustomButton';

const NewProduct = ({ className }) => {
  const containerRef = useRef(null);

  const ref = useRef(null);
  let classes = classNames('sticky top-32', className);
  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect:false,
    //container: containerRef,
    offset: ['start end', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const x = useTransform(scrollYProgress, [0.2, 0.9], ['-20%', '50%']);

  return (
    <section ref={containerRef} className="h-[100vh] sm:h-[150vh] flex flex-wrap">
      <div className="h-full pt-20">
        <motion.div
          ref={ ref }
          style={{ opacity: opacity, x }}
          className={classes}
        >
          <img
            className={'hidden min-[1140px]:block w-[300px]'}
            src="Img/macchina_caffe.png"
            alt="macchina_caffe"
          />
        </motion.div>
      </div>

      <motion.div className="mx-auto text-center lg:text-left pt-14 md:pt-72 lg:pl-20">
        <AnimatedText ref={containerRef}>
          <h1 className="text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] font-bold">
            Nuovi prodotti
            <br />a partire dal 2024
          </h1>
          <AnimatedText ref={containerRef}>
            <CustomButton className={'justify-center lg:justify-start'}>
              Scopri di più
            </CustomButton>
          </AnimatedText>
        </AnimatedText>
      </motion.div>
    </section>
  );
};

// const AnimatedText = ({ children, containerRef }) => {
const AnimatedText = React.forwardRef(({ children, containerRef}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    target: containerRef,
    offset: ['start end' , 'end start'],
    layoutEffect:false
  });
  //const x = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);
  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);
  console.log({ containerRef, ref, children });
  return (
    <div className="h-full relative">
      <div className="sticky top-56 flex flex-col">
        <motion.h1 ref={ref} style={{ opacity, scale }}>
          {children}
        </motion.h1>
      </div>
    </div>
  );
});
// };

AnimatedText.displayName = "AnimatedText";
export default NewProduct;
