import { React, useRef } from 'react';
import classNames from 'classnames';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image'

const Gallery = ({ className }) => {
  let classes = classNames('', className);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //container: containerRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 0.4], ['10%', '0%']);

  const links = [
    'story_img_1.jpeg',
    'story_img_2.jpeg',
    'story_img_3.jpeg',
    'story_img_4.jpeg',
    'story_img_5.jpeg',
    'story_img_6.jpeg',
  ];

  return (
    <div className={'w-full bg-gray-100 pt-5 pb-24 mt-20 overflow-hidden'}>
      <div className="flex flex-wrap w-full relative">
        <h1
          className={
            'pl-5 text-[60px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-montserrat font-bold text-[#2B2B2B]'
          }
        >
          Galleria
        </h1>
      </div>

      <motion.div
        ref={ref}
        style={{ x }}
        className={
          'no-scrollbar overflow-x-scroll pt-5 flex h-56 sm:h-64 md:h-72 lg:h-80 pr-5'
        }
      >
        {links.map((link) => (
          <img
            key={link}
            className={
              'pl-5 [&:not(:hover)]:grayscale transition-all easy-in duration-300'
            }
            alt={link}
            src={'/Img/colored/' + link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
