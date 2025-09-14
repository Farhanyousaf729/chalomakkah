import React from 'react'
import img1 from "../images/airticket1.jpeg"
import img2 from "../images/airticket2.jpeg"
import img3 from "../images/airticket3.jpeg"
import img4 from "../images/airticket4.jpeg"
import img5 from "../images/airticket5.jpeg"
import img6 from "../images/airticket6.jpeg"
 const images = [img1, img2, img3, img4, img5, img6];
const AirTickets = () => {
  return (
   <section id='airticket'>
     <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Air Tickets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
   </section>
  )
}

export default AirTickets
