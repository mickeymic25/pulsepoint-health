import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import { Card } from "@/components/ui/card";

const Appointments = () => {
  return (
    <div className="min-h-screen text-center p-16">
      <section>
        <h1 className="text-6xl flex flex-row justify-center p-4">
          Book Your appointment
        </h1>
      </section>

      <Card className="flex flex-col md:flex-row p-0 ">
        <img
          className=" w-full md:w-2/3 md:h-auto"
          src="/images/Dr Andrew.jpg"
        />

        <AppointmentForm />
      </Card>
    </div>
  );
};

export default Appointments;
