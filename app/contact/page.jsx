import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen text-center p-16">
      <h1 className="flex flex-row justify-center m-8 ">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
