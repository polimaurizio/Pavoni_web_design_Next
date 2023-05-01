import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex w-full justify-center items-center h-screen"
    >
      {/* Mostra l'immagine del logo come preloader */}
      <img className="preloader" src={'/Loghi/logo_pavoni.png'} alt="Logo" />
    </motion.div>
  );
};

export default Preloader;
