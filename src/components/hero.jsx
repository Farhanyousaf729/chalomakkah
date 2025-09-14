import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../images/saudia1.jpg";
import Image2 from "../images/saudia2.jpg";
import Image3 from "../images/saudia3.jpg";
const Hero = () => {
  const images = [Image1, Image2, Image3];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <>
      <section
        id="hero"
        className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center text-white px-4 overflow-hidden"
      >
        {/* Image Slider */}
        <AnimatePresence>
          <motion.div
            key={current}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[current]})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Text Content */}
        <div className="p-6 sm:p-10 rounded text-center relative z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Discover Saudia Arabia With Us
          </h2>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-medium">
            Explore Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
