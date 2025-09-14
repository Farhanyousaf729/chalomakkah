import img1 from "../images/about1.jpeg";
import img2 from "../images/about2.jpeg";
const about = () => {
  return (
  //   <section
  //     id="about"
  //     className="py-16 px-4 sm:px-6 max-w-3xl mx-auto text-center"
  //   >
  //     <h3 className="text-3xl font-bold mb-6">About Us</h3>
  //     <p className="text-gray-600">
  //       "Chalo Makkah Sharif Tours & Travels, owned by Haji Muhammad Ahmad Raza
  //       Qadri, has been serving pilgrims since 2005 with trusted Hajj and Umrah
  //       services. Our mission is to make every spiritual journey smooth, safe,
  //       and memorable. Alongside, we also offer tours across Pakistan — from the
  //       breathtaking mountains of Hunza and Skardu to the rich heritage of
  //       Punjab, Sindh, and Balochistan — ensuring every journey becomes an
  //       experience of a lifetime."
  //     </p>
  //   </section>
  // );
   <section
      id="about"
      className="py-16 px-4 sm:px-6 max-w-8xl mx-auto"
    >
      <h3 className="text-3xl font-bold mb-10 text-center">About Us</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="About Chalo Makkah Sharif"
            className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>

        {/* Text in the middle */}
        <div className="text-center md:col-span-1">
          <p className="text-gray-600 leading-relaxed">
            Chalo Makkah Sharif Tours & Travels, owned by Haji Muhammad Ahmad
            Raza Qadri, has been serving pilgrims since 2005 with trusted Hajj
            and Umrah services. Our mission is to make every spiritual journey
            smooth, safe, and memorable. Alongside, we also offer tours across
            Pakistan — from the breathtaking mountains of Hunza and Skardu to
            the rich heritage of Punjab, Sindh, and Balochistan — ensuring every
            journey becomes an experience of a lifetime.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={img2}
            alt="About Chalo Makkah Sharif"
            className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
};

export default about;
