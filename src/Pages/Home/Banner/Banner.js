import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        /* Center and scale the image nicely */
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      className="mb-28"
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
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 text-justify">
              Despite the fashionable design, X5 Integral Dental Unit features
              more intelligent functions than X3 and X1 dental unit, it has 270
              rotation spittoon, 70 degree rotation side box , 10 holes LED
              surgical lamp and super comfort upholstery cushion with USA
              imported leather.
            </p>
            <PrimaryButton className="btn btn-primary">
              Get Started
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
