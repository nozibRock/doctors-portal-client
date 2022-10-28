import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
        cardText="10:00 AM - 10:30 PM"
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        bgClass="bg-accent"
        img={marker}
        cardText="1st Floor, 50 Purana Paltan,Ruhama Mansion, Dhaka 1000"
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
        cardText="+8801711-589670"
      ></InfoCard>
    </div>
  );
};

export default Info;
