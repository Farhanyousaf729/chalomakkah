import { motion } from "framer-motion";
import Bali from "../images/bali.jpg";
import Paris from "../images/paris.jpg";
import Maldives from "../images/maldives.jpg";
import Dubai from "../images/dubai.jpg";
import Rome from "../images/rome.jpg";
import Baku from "../images/baku.jpg";
import { useState } from "react";
const Gallery = () => {
  const images = [
    {
      src: Bali,
      title: "Bali, Indonesia",
      desc: "Tropical paradise with serene beaches",
    },
    { src: Paris, title: "Paris, France", desc: "The city of lights and love" },
    {
      src: Maldives,
      title: "Maldives",
      desc: "Crystal-clear waters and luxury resorts",
    },
    {
      src: Dubai,
      title: "Dubai, UAE",
      desc: "Modern marvels and desert adventures",
    },
    {
      src: Rome,
      title: "Rome, Italy",
      desc: "Historic charm with timeless beauty",
    },
    {
      src: Baku,
      title: "Baku, Azerbaijan",
      desc: "Where tradition meets modernity",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="gallery"
      className="py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <h2 className="text-3xl  font-bold text-center mb-12">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-10">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-lg shadow-lg relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.3,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 1,
              transition: { duration: 0.3 },
            }}
            onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
          >
            <motion.img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover"
              whileHover={{
                scale: 1.15,
                rotate: -1,
                transition: { duration: 0.4 },
              }}
            />

            {/* Overlay */}
            <motion.div
              className={`absolute inset-0 bg-black/60 text-white flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300 ${
                hoveredIndex === idx
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <h3 className="font-bold text-lg mb-2">{img.title}</h3>
              <p className="text-sm">{img.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
