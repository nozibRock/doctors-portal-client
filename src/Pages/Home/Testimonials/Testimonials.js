import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review/Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Tabassum Zinia",
      review:
        "Dr. and his staff are AMAZING! My daughters and I came in for our first visit and I mentioned that my older daughter had anxiety when it came to dentists. The staff took her by the hand, explained the entire process and involved her in every way possible. She left with a HUGE smile and said in the car, “I panicked for nothing mom!” Thank you for taking the time with my children and making it a true pleasure. Best Dentist we have ever gone to!",
      location: "Bashundhara",
      img: people1,
    },
    {
      _id: 2,
      name: "Shrabanti Kotha",
      review:
        "I have seen a lot of Dentists over my lifetime because I have had some serious dental issues. But my highest praise goes to Dr. and his staffs . I was always very anxious going to the dentist but this time at LASER DENTAL, my experience was so painless and relaxed their was no discomfort whatsoever. They make scheduling easy and I love their text reminders and follow-up as well.Thank you!",
      location: "Manikganj",
      img: people2,
    },
    {
      _id: 3,
      name: "Azmeri Asha",
      review:
        "I was so afraid of Injection since my childhood. But when Dr. gave me Injection, I did not even realize anything at all! It was completely painless & since then I am one of the biggest fans of Dr. I have recommended many new patients to LASER DENTAL from my friends & family members.",
      location: "Dhaka",
      img: people3,
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-4xl">What our Patients say</h2>
        </div>
        <div>
          <LazyLoadImage
            className="w-24 lg:w-48"
            alt="quote sign"
            effect="blur"
            src={quote}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
