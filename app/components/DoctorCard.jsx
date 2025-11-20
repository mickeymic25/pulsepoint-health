"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
Button;

const DoctorCard = ({ physician }) => {
  return (
    <>
      <Card className="flex flex-col text-center p-2 mt-1 justify-between h-full ">
        <CardHeader className="flex flex-col items-center">
          <Image
            src={physician.imageSrc}
            alt={`${physician.name}, ${
              physician.gender === "F"
                ? "Female Doctor"
                : physician.gender === "M"
                ? "Male Doctor"
                : "Unspecified"
            } `}
            width={200}
            height={200}
            className="my-1 rounded-lg"
          />
          <CardTitle className="text-center">
            <p>{physician.name}</p>

            <p>
              {physician.gender === "F"
                ? "Female"
                : physician.gender === "M"
                ? "Male"
                : " "}
            </p>
          </CardTitle>
          <CardDescription className="text-center">
            {physician.specialties}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{physician.address.line1}</p>
          <p>{physician.address.city}</p>
          <p>{physician.address.zip.replace(/(.{5})/, "$1 ")}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Book an appointment</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default DoctorCard;
