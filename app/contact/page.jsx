import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen text-center p-16">
      <h1 className="text-6xl flex flex-row justify-center p-4">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
