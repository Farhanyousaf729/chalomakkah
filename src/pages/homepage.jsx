import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Destinations from "../components/destinations";
import TourPackages from "../components/tourpackges";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import HajjUmrah from "../components/hajjumrah";
import Visas from "../components/visas";
import AirTickets from "../components/AirTickets";
import License from "../components/license";
import Hotels from "../components/hotel";
import CarRent from "../components/CarRent";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HajjUmrah/>
      <Visas/>
      <AirTickets/>
      <License/>
      <Destinations />
      <Gallery />
      <Hotels/>
      <CarRent/>
      <TourPackages />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
