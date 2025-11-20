"use client";

import React, { useState, useEffect } from "react";
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
import CustomPagination from "./CustomPagination";

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

const addImgSrcToDoctorsData = (doctors) => {
  const totalFemaleImages = 8;
  const totalMaleImages = 17;

  let femaleCounter = 0;
  let maleCounter = 0;

  return doctors.map((doctor) => {
    if (doctor.gender.toLowerCase() === "f") {
      femaleCounter = (femaleCounter % totalFemaleImages) + 1;

      return {
        ...doctor,
        imageSrc: `/images/doctors/female/female${femaleCounter}.jpg`,
      };
    } else {
      maleCounter = (maleCounter % totalMaleImages) + 1;

      return {
        ...doctor,
        imageSrc: `/images/doctors/male/male${maleCounter}.jpg`,
      };
    }
  });
};

const DoctorSearch = ({ doctors }) => {
  const [filter, setFilter] = useState({
    specialty: "",
    city: "",
    gender: "",
  });

  const parsedDoctorsData = addImgSrcToDoctorsData(doctors);

  const [shouldSearch, setShouldSearch] = useState(false);

  const [openSpecialty, setOpenSpecialty] = useState(true);
  const [openCity, setOpenCity] = useState(true);

  const [rawDoctorData, setRawDoctorData] = useState(parsedDoctorsData);

  const specialtyList = parsedDoctorsData.reduce((acc, doc) => {
    const doesExist = acc.some((innerArr) =>
      arraysEqual(innerArr, doc.specialties)
    );
    if (!doesExist) {
      acc.push(doc.specialties);
    }

    return acc;
  }, []);

  useEffect(() => {
    console.log({ rawDoctorData });
  }, [rawDoctorData]);

  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 6;
  const lastDoctorIndex = currentPage * doctorsPerPage;
  const firstDoctorIndex = lastDoctorIndex - doctorsPerPage;
  const currentDoctors = rawDoctorData.slice(firstDoctorIndex, lastDoctorIndex);
  const totalPages = Math.ceil(rawDoctorData.length / doctorsPerPage);
  return (
    <>
      <section className="flex flex-col  md:flex-row justify-center align-center gap-3.5">
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
              <CommandInput
                className="h-8 p-5"
                placeholder="Search specialty"
              />
              <CommandList>
                <CommandEmpty>No specialty found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      setFilter({ ...filter });
                      setOpenSpecialty(false);
                    }}
                  >
                    All
                  </CommandItem>
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
                  {parsedDoctorsData.map((doc, index) => (
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
            const filteredDoctors = parsedDoctorsData.filter((doc) => {
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
            setRawDoctorData(filteredDoctors);
            setShouldSearch(true);
          }}
        >
          Search
        </Button>
      </section>
      {/*DoctorsCard*/}

      {currentDoctors.length ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {currentDoctors.map((doctor, index) => {
            return (
              <DoctorCard key={doctor.id} physician={doctor} index={index} />
            );
          })}
        </div>
      ) : (
        "No Doctors Found."
      )}
      <CustomPagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default DoctorSearch;
