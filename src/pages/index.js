import Nav from '../Components/Nav';
import Container from '../Components/Container';
import Carrosello from '../Components/Carrosello';
import CustomCard from '../Components/CustomCard';
import CustomFooter from '../Components/Footer';
import CustomHorizontalCard from '../Components/CustomHorizontalCard';
import CustomButton from '../Components/CustomButton';
import React, { useRef, useState, useEffect } from 'react';
import Gallery from '../Components/Gallery';
import NewProduct from '../Components/NewProduct/NewProduct';
import { useScroll, useTransform, motion } from 'framer-motion';
import Preloader from '../Components/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simula il caricamento dei dati
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //container: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <Container className={'select-none'}>
      {/* <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div> */}
      {isLoading ? (
        // Mostra il preloader se isLoading è true
        <Preloader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Nav />
          <Carrosello />

          {/* Sezione LA NOSTRA STORIA */}
          <a id={'storia_anchor'} />

          <h1
            className={
              'mt-16 sm:mt-20 text-center font-bold text-[#2B2B2B] text-[30px] sm:text-[40px] font-montserrat'
            }
          >
            La nostra storia
          </h1>

          <CustomHorizontalCard />
          <CustomButton className={'justify-center'}>
            Scopri di più
          </CustomButton>

          {/* Sezione I NOSTRI PRODOTTI */}
          <Gallery />

          {/* Sezione I NOSTRI PRODOTTI */}
          <NewProduct />
          <a id={'prodotti_anchor'}></a>
          <CustomCard />
          <CustomButton className={'justify-center'}>
            Scopri di più
          </CustomButton>

          {/* FOOTER */}
          <a id={'contatti_anchor'} />
          <CustomFooter />
        </motion.div>
      )}
      
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </Container>
  );
}
