import { React, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const CustomHorizontalCard = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    //container: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const x_1 = useTransform(scrollYProgress, [0, 0.5], ['-5%', '0%']);
  const x_2 = useTransform(scrollYProgress, [0, 0.5], ['5%', '0%']);

  return (
    <div
      className={
        'w-[80%] md:w-[60%] pt-20 mx-auto flex justify-center md:grid grid-cols-2 gap-7 font-montserrat font-light text-center md:text-justify text-sm sm:text-sm xl:text-base'
      }
    >
      <motion.p ref={ref} style={{ opacity: opacity, x: x_1 }}>
        Dalla metà degli anni Ottanta l’Azienda si è impegnata nello studio di
        nuove soluzioni ed alla realizzazione di pannellature in materiali
        termoplastici, che consentono un notevole snellimento del ciclo
        produttivo. All’ergonomia è stata dedicata una particolare attenzione,
        come d’altra parte alla ricerca di soluzioni tecnologiche e sviluppo di
        nuovi prodotti.
        <br />
        <br />
        Ai modelli tradizionali a leva e semiautomatici sono stati affiancati i
        modelli elettronici a dosatura volumetrica, sempre più affidabili.
      </motion.p>

      <motion.p
        ref={ref}
        style={{ opacity: opacity, x: x_2 }}
        className={'hidden md:block'}
      >
        La Pavoni il 29 gennaio 1999 ha ottenuto la certificazione UNI EN ISO
        9001, numero di certificato 9130 PAV 2, ed IQ Net, numero di
        registrazione IT-8070, rilasciate dagli Enti certificatori competenti e
        la conformità alla norma ISO 9001:2000 il 14 Novembre 2003.
        <br />
        <br />
        Antesignane delle macchine domestiche sono i modelli a leva Europiccola
        e Professional, punto d’incontro tra eleganza, qualità ed affidabilità,
        prodotte dal 1961 non conoscono mode; il modello Professional è esposto
        nel museo d’Arte Moderna di New York.
      </motion.p>
    </div>
  );
};

export default CustomHorizontalCard;
