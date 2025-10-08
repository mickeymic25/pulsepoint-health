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
import React from "react";
Button;

const DoctorCard = ({ physician }) => {
  return (
    <>
      <Card className="flex flex-col text-center p-2 mt-1">
        <CardHeader>
          <CardTitle>{physician.name}</CardTitle>
          <CardDescription>{physician.specialties}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            {physician.address.line1}, {physician.address.city},
            {physician.address.country}, {physician.address.zip}
          </p>
        </CardContent>
        <CardFooter>
          <Button></Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default DoctorCard;
