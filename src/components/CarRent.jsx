import img1 from "../images/rentcar1.jpeg"
import img2 from "../images/rentcar2.jpeg"
import img3 from "../images/rentcar3.jpeg"
import img4 from "../images/rentcar4.jpeg"
import img5 from "../images/rentcar5.jpeg"
import img6 from "../images/rentcar6.jpeg"
import img7 from "../images/rentcar7.jpeg"
import img8 from "../images/rentcar8.jpeg"

const CarRent = () => {
    const images = [img1,img2,img3,img4,img5,img6,img7,img8]
  return (
    <section id="carrent">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Ziyrat & Car Rental</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
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

export default CarRent
