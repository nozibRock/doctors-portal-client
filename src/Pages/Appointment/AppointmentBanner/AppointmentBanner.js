import React from "react";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PPPP")}.</p>;
  }
  return (
    <section
      style={{
        background: `url(${bg})`,
        /* Center and scale the image nicely */
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <LazyLoadImage
            className="max-w-sm rounded-lg shadow-2xl"
            alt="CINGOL X5 New Integral Dental Unit Dental Chair"
            effect="blur"
            src={chair}
          />
          <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
