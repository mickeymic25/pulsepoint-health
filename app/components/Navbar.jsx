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
    <div className="flex flex-row bg-white m-3">
      <nav className="flex justify-between items-center gap-4">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex justify-end md:hidden">
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

        <div className="hidden md:flex md:flex-row justify-end">
          <ul className="flex flex-row">
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
    </div>
  );
};

export default Navbar;
