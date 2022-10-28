import React from 'react';

const Service = ({ service }) => {
  return (
    <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl transition-all hover:scale-105">
      <figure className="px-10 pt-10">
        <img src={service.img} alt={service.name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;