import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between w-full z-50 fixed shadow-sm bg-white p-3">
        <div className="p-2">
          <h1>Logo</h1>
        </div>
        <div className="flex justify-end md:hidden p-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GiHamburgerMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Book Appointment</DropdownMenuLabel>
              <DropdownMenuLabel>Doctors</DropdownMenuLabel>
              <DropdownMenuLabel>Contact</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:flex md:flex-row justify-end p-2 mr-12">
          <ul className="flex flex-row gap-18">
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
      </nav>
    </>
  );
};

export default Navbar;
