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

      <Card className="grid grid-cols-1 md:grid-cols-2 overflow-hidden p-0">
        <div className="h-64 md:h-auto">
          <img
            src="/images/Dr Andrew.jpg"
            alt="Dr. Andrew Nkele"
            className="h-full w-full object-cover "
          />
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <AppointmentForm />
        </div>
      </Card>
    </div>
  );
};

export default Appointments;
