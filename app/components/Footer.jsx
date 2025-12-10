import Link from "next/link";
import React from "react";
Link;

const Footer = () => {
  return (
    <div className="bg-primary max-w-screen h-[200px] flex flex-col justify-center items-center text-center text-sm">
      <div className="p-2">
        <Link href="/">
          <img
            src="
            /images/white-pulsepointhealth-high-resolution-logo-transparent.png"
            className="h-12 w-auto"
          />
        </Link>
      </div>
      <div
        className=" p-2 flex flex-col text-center md:flex-row justify-center items-center
      "
      >
        <ul className=" md:gap-18 text-white ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/appointments">Book Appointment</Link>
          </li>
          <li>
            <Link href="/doctors">Doctors</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className=" text-white p-1">Copyright PulsePoint Health 2025</div>
    </div>
  );
};

export default Footer;
