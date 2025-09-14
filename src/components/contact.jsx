import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-blue-50">
      <h3 className="text-3xl font-bold mb-10 text-center">Contact Us</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <form className="space-y-6 bg-white p-6 rounded-2xl shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded h-32"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            Send Message
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-center space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Our Address</h4>
            <p className="text-gray-600">
              {" "}
              G-11, Hill View Arcade, 5 Davis road Shimla Hill, Lahore
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Call Us</h4>

            {/* Phone */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:+923151644222" className="hover:underline">
                +92 315 1644222
              </a>
            </p>

            {/* WhatsApp */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/923151644222"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +92 315 1644222
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Email</h4>
            <a
              href="mailto:chalomakkah@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition hover:underline"
            >
              <FaEnvelope className="text-red-500" />
              chalomakkah@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.facebook.com/share/1Lh2DZ9zM5/"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/cmstoursandtravels/"
                className="text-pink-500 hover:text-pink-700"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@cmstoursandtravelsofficial?si=rut4Y2CeaP9xOOSw
              "
                className="text-sky-500 hover:text-sky-700"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@visionbyahmadraza?_t=ZS-8zEYs5OlPW5&_r=1
              "
                className="text-sky-500 hover:text-sky-700"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/company/104357345/admin/dashboard/
              "
                className="text-sky-500 hover:text-sky-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
