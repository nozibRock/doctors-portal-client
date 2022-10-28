import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
