import Image1 from "../images/saudia1.jpg";
import Image2 from "../images/saudia2.jpg";
const packages = [
  {
    type: "Economy",
    features: ["Economy Hotels", "Shared Transport", "Visa","Air Ticket"],
  },
  {
    type: "3 Star",
    features: ["Standard Hotels", "Private Transport","Visa","Air Ticket" ],
  },
  {
    type: "5 Star",
    features: ["Luxury Hotels", "Private Transport","Visa","Air Ticket" ],
  },
];
const PackageSection = ({ title, image }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-6">{title} Packages</h2>
      <div className="relative bg-white p-6 rounded-2xl shadow-xl">
        {image && (
          <div className="w-full h-48 mb-6 overflow-hidden rounded-xl">
            <img
              src={image}
              alt={`${title}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="border rounded-2xl shadow-md p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2">{pkg.type}</h3>
              <p className="text-lg font-bold text-blue-600 mb-4">
                {pkg.price}
              </p>
              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="text-gray-600">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const HajjUmrah = () => {
  return (
    <section id="hajjumrah" className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <PackageSection title="Hajj" image={Image1} />
      <PackageSection title="Umrah" image={Image2} />
    </section>
  );
};

export default HajjUmrah;
