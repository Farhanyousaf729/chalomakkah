import React from "react";
import makkah1 from "../images/makkah1.jpeg";
import makkah2 from "../images/makkah2.jpeg";
import makkah3 from "../images/makkah3.jpeg";
import makkah4 from "../images/makkah4.jpeg";
import makkah5 from "../images/makkah5.jpeg";
import madina1 from "../images/madina1.jpeg";
import madina2 from "../images/madina2.jpeg";
import madina3 from "../images/madina3.jpeg";
import madina4 from "../images/madina4.jpeg";
import madina5 from "../images/madina5.jpeg";

const Hotels = () => {
  const makkahImages = [makkah1, makkah2, makkah3, makkah4, makkah5];
  const madinaImages = [madina1, madina2, madina3, madina4, madina5];
  return (
    <section id="hotels">
      <h3 className="text-3xl text-center pt-3 font-bold mb-6">Hotels</h3>
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Makkah Hotels */}
      <section className="flex-1">
        <h2 className="text-2xl font-bold mb-6 text-center">Makkah Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {makkahImages.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={img}
                alt={`Makkah Hotel ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Madina Hotels */}
      <section className="flex-1">
        <h2 className="text-2xl font-bold mb-6 text-center">Madina Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {madinaImages.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={img}
                alt={`Madina Hotel ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
    </section>
  );
};

export default Hotels;
