import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import AppointmentService from "../AppointmentService/AppointmentService";
import BookingModal from "../BookingModal/BookingModal";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formatDate = format(date, "PPPP");
  /* useEffect(() => {
    fetch(`https://murmuring-lake-47190.herokuapp.com/available?date=${formatDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formatDate]); */
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", formatDate], () =>
    fetch(
      `https://murmuring-lake-47190.herokuapp.com/available?date=${formatDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PPPP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4">
        {services?.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
