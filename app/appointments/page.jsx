import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import { Card } from "@/components/ui/card";

const Appointments = () => {
  return (
    <div className="min-h-screen text-center p-16">
      <section>
        <h1 className=" flex flex-row justify-center m-8">
          Book Your appointment
        </h1>
      </section>

      <Card className="flex flex-col md:flex-row p-0 ">
        <img
          className=" w-full md:w-[860px] md:h-auto"
          src="/images/Dr Andrew.jpg"
          alt="Dr.Andrew Nkele"
        />

        <AppointmentForm />
      </Card>
    </div>
  );
};

export default Appointments;
