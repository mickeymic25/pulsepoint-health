import React from "react";
import AppointmentForm from "../components/AppointmentForm";

const Appointments = () => {
  return (
    <div className="min-h-screen text-center p-16">
      <h1 className="text-6xl flex flex-row justify-center p-4">
        Book Your appointment
      </h1>
      <AppointmentForm />
    </div>
  );
};

export default Appointments;
