import React from 'react'

const Tourpackages = () => {
  return (
    <section id='packages' className="bg-gray-100 py-16 px-4 sm:px-6 text-center">
      <h3 className="text-3xl font-bold mb-10">Domestic Packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          { title: "Hunza & Skardu",hotels:"3 & 4 star"},
          { title: "VIP Skardu",hotels:"3 & 4 star" },
          { title: "Honeymoon Package", hotels:"3 & 4 star"},
        ].map((pkg, i) => (
          <div key={i} className="bg-white p-6 shadow-lg rounded">
            <h4 className="text-xl font-bold mb-2">{pkg.title}</h4>
            <p className="font-semibold"></p>
            <ul className="text-sm mt-4 space-y-2">
              <li>✓ Flights Included</li>
              <li>✓ Hotel 3 & 4 Star</li>
              <li>✓ Private Transport</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tourpackages
