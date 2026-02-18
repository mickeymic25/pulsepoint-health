import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
DropdownMenuItem;
const Navbar = () => {
  const linkStyles = "hover:border-b-3  hover:border-[#005d8f] duration-100 ";

  return (
    <>
      <nav className="flex justify-between w-full z-50 fixed shadow-sm bg-white p-3 items-center">
        <div className="p-2">
          <Link href="/" passHref>
            <img
              src="/images/pph-nav-logo-transparent.png"
              className="h-9 md:h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex justify-end md:hidden p-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GiHamburgerMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href="/appointments">Book Appointment</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href="/doctors">Doctors</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:flex md:flex-row justify-end items-center p-2 mr-12">
          <ul className="flex flex-row gap-18">
            <li>
              <Link href="/" passHref className={linkStyles}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/appointments" passHref className={linkStyles}>
                Book Appointment
              </Link>
            </li>
            <li>
              <Link href="/doctors" passHref className={linkStyles}>
                Doctors
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref className={linkStyles}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
