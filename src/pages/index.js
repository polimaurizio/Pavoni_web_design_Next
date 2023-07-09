/* eslint-disable @next/next/no-img-element */
import Nav from "../Components/Nav";
import Container from "../Components/Container";
import Carrosello from "../Components/Carrosello";
import CustomFooter from "../Components/Footer";
import History from "../Components/History";
import React, { useRef, useState, useEffect } from "react";
import Gallery from "../Components/Gallery";
import { useScroll, motion } from "framer-motion";
import Preloader from "../Components/Preloader";
import NewProduct from "@/Components/NewProduct/NewProduct";
import Card from "@/Components/Card/Card";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <Container className={""}>
      {isLoading ? (
        <Preloader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Nav />
          <Carrosello />

          <a id={"storia_anchor"} />
          <History />
          <Gallery />

          <a id={"prodotti_anchor"}></a>
          <Card />
          <NewProduct />

          <a id={"contatti_anchor"} />
          <CustomFooter />
        </motion.div>
      )}

      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </Container>
  );
}
