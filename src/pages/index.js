/* eslint-disable @next/next/no-img-element */
import Nav from "../Components/Nav";
import Container from "../Components/Container";
import Carrosello from "../Components/Carrosello";
import CustomCard from "../Components/CustomCard";
import CustomFooter from "../Components/Footer";
import History from "../Components/History";
import CustomButton from "../Components/CustomButton";
import React, { useRef, useState, useEffect } from "react";
import Gallery from "../Components/Gallery";
import { useScroll, motion } from "framer-motion";
import Preloader from "../Components/Preloader";
import NewProduct from "@/Components/NewProduct/NewProduct";

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
    offset: ["start end", "end start"],
  });

  return (
    <Container className={""}>
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
          <a id={"storia_anchor"} />

          <div className="grid grid-cols-12 gap-5 w-full">
            <h1
              className={
                "mt-16 mb-10 md:mb-16 sm:mt-20 font-light text-primary text-[50px] sm:text-[70px] font-montserrat col-start-2 col-span-10"
              }
            >
              La nostra storia
            </h1>

            <div className="col-start-1 col-end-6 bg-cover hidden md:flex">
              <img
                className="w-full h-full object-cover grayscale"
                src="/Img/colored/story_img_7.jpg"
                alt="story_img"
              />
            </div>
            <History />
          </div>

          {/* Sezione I NOSTRI PRODOTTI */}
          <Gallery />

          <a id={"prodotti_anchor"}></a>
          <CustomCard
            cardContent={[
              {
                img: "/Loghi/image_1.jpeg",
                title: "Esperto Edotto",
                text: "Il nuovo modello di punta delle macchine a leva domestiche. Materiali pregiati e possibilità di controllo costante della pressione di erogazione esercitata abbassando...",
              },
              {
                img: "/Loghi/image_2.jpeg",
                title: "Esperto Edotto",
                text: "Il nuovo modello di punta delle macchine a leva domestiche. Materiali pregiati e possibilità di controllo costante della pressione di erogazione esercitata abbassando...",
              },
              {
                img: "/Loghi/image_3.jpeg",
                title: "Esperto Edotto",
                text: "Il nuovo modello di punta delle macchine a leva domestiche. Materiali pregiati e possibilità di controllo costante della pressione di erogazione esercitata abbassando...",
              },
              {
                img: "/Loghi/image_1.jpeg",
                title: "Esperto Edotto",
                text: "Il nuovo modello di punta delle macchine a leva domestiche. Materiali pregiati e possibilità di controllo costante della pressione di erogazione esercitata abbassando...",
              },
            ]}
          />
          <CustomButton href={"#"} className={"justify-center"}>
            Scopri di più
          </CustomButton>

          <NewProduct />

          {/* FOOTER */}
          <a id={"contatti_anchor"} />
          <CustomFooter />
        </motion.div>
      )}

      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </Container>
  );
}
