import React from "react";
import bg from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        /* Center and scale the image nicely */
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center lg:px-10 md:px-6 lg:py-0 md:py-14 sm:py-12 ">
      <div className="flex-1 hidden lg:block">
        <LazyLoadImage
          className="-mt-24"
          alt="Make an appointment"
          effect="blur"
          src={doctor}
        />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white text-justify my-4">
          Are you looking for Best Dentist or Dentist near me or Best Dental
          Clinic in Dhaka, Bangladesh? Yes, you are in the right place. LASER
          DENTAL is one of the most hi-tech dental clinics in Dhaka, serving all
          of your dental needs , with special emphasis on 3D Dental Scanning,
          Laser Dentistry, Teeth whitening, Painless Injection Facility, Dental
          Braces, Dental Implant and Scanning whole mouth with world most
          advanced Intra-oral Caries & Plaque Scanner.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
