"use client";

import React, { useState } from "react";
{
  /*use Drawer on mobile*/
}
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import DoctorCard from "./DoctorCard";

function toSentenceCase(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}

//filter based on city=dropdown, gender-any, male, female , speacialty-drop down
const DoctorSearch = ({ doctors }) => {
  // console.log({ doctors });

  const [filter, setFilter] = useState({
    specialty: "",
    city: "",
    gender: "",
  });

  const [shouldSearch, setShouldSearch] = useState(false);

  const [openSpecialty, setOpenSpecialty] = useState(true);
  const [openCity, setOpenCity] = useState(true);

  const filteredDoctors = doctors.filter((doc) => {
    const filteredSpecialty = filter.specialty
      ? doc.specialties.includes(filter.specialty)
      : true;

    const filteredCity = filter.city
      ? doc.address.city.includes(filter.city)
      : true;

    const filteredGender = filter.gender
      ? doc.gender.includes(filter.gender)
      : true;

    return filteredSpecialty && filteredCity && filteredGender;
  });

  const specialtyList = doctors.reduce((acc, doc) => {
    const doesExist = acc.some((innerArr) =>
      arraysEqual(innerArr, doc.specialties)
    );
    if (!doesExist) {
      acc.push(doc.specialties); // only add if not already included
    }

    return acc;
  }, []);

  return (
    <div className=" border-4 border-b-gray-400">
      {/*Logic for doctors search then create a doctors card component*/}

      <Popover open={openSpecialty} onOpenChange={setOpenSpecialty}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openSpecialty}
            className="w-[200px] justify-between"
          >
            {filter.specialty || "Select specialty"}
            <ChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput className="h-9" placeholder="Search specialty" />
            <CommandList>
              <CommandEmpty>No specialty found.</CommandEmpty>
              <CommandGroup>
                {specialtyList.map((spec, index) => (
                  <CommandItem
                    key={index}
                    value={spec}
                    onSelect={(newspec) => {
                      setFilter({ ...filter, specialty: newspec });
                      setOpenSpecialty(false);
                    }}
                  >
                    {spec.join(", ")}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Popover open={openCity} onOpenChange={setOpenCity}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openCity}
            className="w-[200px] justify-between"
          >
            {filter.city || "Select city"}
            <ChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput className="h-9" placeholder="Search specialty" />
            <CommandList>
              <CommandEmpty>No city found.</CommandEmpty>
              <CommandGroup>
                {doctors.map((doc, index) => (
                  <CommandItem
                    key={index}
                    value={doc.address.city}
                    onSelect={(newcity) => {
                      setFilter({ ...filter, city: newcity });
                      setOpenCity(false);
                    }}
                  >
                    {toSentenceCase(doc.address.city)}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Select
        onValueChange={(gender) => setFilter({ ...filter, gender: gender })}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Choose gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="F">Female</SelectItem>
          <SelectItem value="M">Male</SelectItem>
        </SelectContent>
      </Select>

      <Button
        onClick={() => {
          setShouldSearch(true);
        }}
      >
        Search
      </Button>

      {/*DoctorsCard*/}

      {shouldSearch &&
        (filteredDoctors.length ? (
          <div className="grid grid-cols-1">
            {filteredDoctors.map((doctorsCard, index) => (
              <DoctorCard key={index} physician={doctorsCard} index={index} />
            ))}
          </div>
        ) : (
          "NO DOCTORS FOUND WITH THOSE FILTERS"
        ))}
    </div>
  );
};

export default DoctorSearch;
