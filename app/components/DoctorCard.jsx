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
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorCard = ({ physician }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
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
            {physician.specialties.join(", ")}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p>{physician.address.line1}</p>
          <p>{physician.address.city}</p>
          <p>{physician.address.zip.replace(/(.{5})/, "$1 ")}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/appointments">Book an appointment </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DoctorCard;
