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

const DoctorCard = ({ physician, index }) => {
  const isFemale = physician.gender?.toLowerCase() === "f";
  const folder = isFemale ? "female" : "male";
  const totalImages = isFemale ? 5 : 20;
  const imageNumber = (index % totalImages) + 1;
  const imageSrc = `/images/doctors/${folder}/${folder}${imageNumber}.jpg`;

  return (
    <>
      <Card className="flex flex-col text-center p-2 mt-1">
        <CardHeader>
          <Image
            src={imageSrc}
            alt={`${physician.name}, ${
              physician.gender === "F"
                ? "Female Doctor"
                : physician.gender === "M"
                ? "Male Doctor"
                : "Unspecified"
            } `}
            width={200}
            height={200}
            className="mb-1"
          />
          <CardTitle>
            <p>{physician.name}</p>

            <p>
              {physician.gender === "F"
                ? "Female"
                : physician.gender === "M"
                ? "Male"
                : " "}
            </p>
          </CardTitle>
          <CardDescription>{physician.specialties}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{physician.address.line1}</p>
          <p>{physician.address.city}</p>
          <p>{physician.address.zip}</p>
        </CardContent>
        <CardFooter>
          <Button>Book an appointment</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default DoctorCard;
