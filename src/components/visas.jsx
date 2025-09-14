import SaudiaImg from "../images/saudia1.jpg";
import DubaiImg from "../images/dubai.jpg";
import TurkeyImg from "../images/turkey.jpg";
import MalaysiaImg from "../images/malaysia.jpg";
import UkImg from "../images/uk.jpg";
import UsaImg from "../images/usa.jpg";
import CanadaImg from "../images/canada.jpg";
import QatarImg from "../images/qatar.jpg";
const visas = [
  { country: "Saudi Arabia", image: SaudiaImg },
  { country: "UAE", image: DubaiImg },
  { country: "Turkey", image: TurkeyImg },
  { country: "Malaysia", image: MalaysiaImg },
  { country: "UK", image: UkImg },
  { country: "USA", image: UsaImg },
  { country: "Canada", image: CanadaImg },
  { country: "Qatar", image: QatarImg },
];
const VisaCard = ({ country, price, image }) => (
  <div
    className="relative rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition"
    style={{ minHeight: "220px" }}
  >
    <img
      src={image}
      alt={country}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
      <h3 className="text-2xl font-bold mb-2">{country}</h3>
      <p className="text-lg font-semibold mb-4">{price}</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  </div>
);
const Visas = () => {
  return (
    <section id="visas" className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Visa Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visas.map((visa, i) => (
          <VisaCard
            key={i}
            country={visa.country}
            price={visa.price}
            image={visa.image}
          />
        ))}
      </div>
    </section>
    // <img src={SaudiaImg} alt="" />
  );
};

export default Visas;
