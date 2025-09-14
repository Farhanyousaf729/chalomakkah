import React from "react";
import Bali from "../images/bali.jpg";
import Paris from "../images/paris.jpg";
import Maldives from "../images/maldives.jpg";
const Destinations = () => {
  const places = [
    { src: Bali, name: "Bali" },
    { src: Paris, name: "Paris" },
    { src: Maldives, name: "Maldives" },
  ];
  return (
    <section id="destinations" className="py-16 px-4 sm:px-6 text-center">
      <h3 className="text-3xl font-bold mb-10">Popular Destinations</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {places.map((place, i) => (
          <div key={i} className="shadow-lg rounded overflow-hidden">
            <img
              src={place.src}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold">{place.name}</h4>
              <p className="text-sm mt-2">
                Experience the beauty of {place.name} like never before.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
