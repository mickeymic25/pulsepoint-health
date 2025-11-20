import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  healthPartners,
  homepageDoctors,
  hospitalServices,
  testimonials,
} from "./data/hospitalServices";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative  flex flex-col text-center max-w-screen lg:max-xl:h-screen">
      <section>
        <div className="relative max-w-screen h-screen">
          <Image
            src="/images/hero-banner-image.jpg"
            fill={true}
            className="object-cover"
            alt="Hero Image"
          />
        </div>
      </section>
      <section className="h-9/10 m-5 md:hidden text-center">
        <h1 className=" flex flex-row justify-center">PulsePoint Health</h1>
      </section>

      <section className=" min-h-screen text-center m-5">
        <h1 className="flex flex-row justify-center">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="relative  w-4/6">
            <img
              className=" w-4/5 md:h-[640px] absolute  md:left-1.5 md:p-1"
              src="/images/ellipse.png "
              alt="big blue ellipse"
            />
            <img
              className=" absolute md:right-20  w-full h-auto md:top-20"
              src="/images/intro-doctor.png"
              alt="female doctor"
            />
          </div>
          <div className="md:w-1/2 flex flex-col  ">
            <p className="text-left">
              Pulse Point is a modern, community-focused healthcare provider
              dedicated to delivering fast, reliable, and compassionate medical
              care for individuals and families. Our mission is simple — to make
              high-quality healthcare accessible, transparent, and
              patient-centred. Whether you need routine check-ups, specialist
              consultations, vaccinations, or ongoing support, our experienced
              team is here to guide you every step of the way with care you can
              trust. Patients trust Pulse Point because of :
            </p>
            <ul className="circle-list flex flex-col md:gap-10 md:m-2.5  ">
              <li>
                Highly qualified doctors and specialists who are fully vetted,
                experienced, and committed to safe, evidence-based care.
              </li>
              <li>
                A patient-centred approach that prioritises comfort, clarity,
                and tailored treatment at every appointment.
              </li>
              <li>
                Transparent and accessible services with simple booking, clear
                communication, and no hidden steps.
              </li>
              <li>
                Modern healthcare technology that ensures faster results,
                accurate assessments, and a seamless experience from start to
                finish.
              </li>
            </ul>
            <p className="text-left">
              We are committed to serving people with patient-centered care and
              to deliver outstanding healthcare for better lives.
            </p>
          </div>
        </div>
      </section>
      <section className="m-5 min-h-screen flex flex-col items-center justify-center  ">
        <h1>Our Services</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {hospitalServices.map((service, index) => {
            return (
              <Card className="flex flex-col text-center p-2 mt-1" key={index}>
                <CardHeader className="flex flex-col items-center ">
                  <Image
                    src={service.serviceicon}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="mt-1"
                  />

                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  {service.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="min-h-screen m-5  flex flex-col items-center justify-center  ">
        <h1>Our Doctors</h1>
        <p>
          Teamwork and effective communication among Doctors is critical to
          providing high-quality patient care and ensuring positive health
          outcomes.
        </p>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-5 md:my-10 ">
          {homepageDoctors.map((doctor, index) => {
            return (
              <div
                key={index}
                className="w-full md:w-96 h-auto justify-center items-center"
              >
                <img
                  src={doctor.img}
                  alt={doctor.alt}
                  className="mt-1  rounded-2xl"
                />
                <h3>{doctor.name}</h3>
                <p>{doctor.speciality}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button variant="default">Find Doctors</Button>
        </div>
      </section>
      {/*Health Partners*/}
      <section className="m-5 min-h-screen flex flex-col items-center justify-center">
        <h1 className="flex flex-row justify-center ">Our Health Partners</h1>
        <p>
          Research organisations that collaborate on medical reserach,
          healthcare innovation and the development of new medical technologies
          and treatments.
        </p>
        <div className="gap-3 flex flex-col md:flex-row bg-white p-3 md:p-10 m-2 shadow-lg justify-center items-center ">
          {healthPartners.map((partner, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between p-1 "
              >
                <Image
                  src={partner.partnericon}
                  alt={partner.alt}
                  width={150}
                  height={150}
                  className="mt-1 "
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="min-h-screen m-5 flex flex-col items-center ">
        <h1>Our Facilities</h1>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="relative  w-full md:w-1/2">
            <Image
              src="/images/facility1.jpg"
              alt="Woman using a microscope"
              height={500}
              width={500}
              className="mb-3 absolute md:right-16 rounded-2xl "
            />
            <Image
              src="/images/julia-koblitz-lab-unsplash.jpg"
              alt="Laboratory"
              height={500}
              width={500}
              className="mb-3 absolute rounded-2xl md:top-64 md:left-20"
            />
          </div>
          <div className="w-1/2 text center flex flex-col  items-center justify-center">
            <h2>
              Clinical facilities are the backbone of modern healthcare systems
            </h2>
            <p className="text-left">
              Providing essential resources for the diagnosis, treatment, and
              management of a wide range of medical conditions, PulsePoint's
              clinical facilities set the standard for modern healthcare.
              Equipped with cutting-edge technology and designed for efficiency
              and patient comfort, our hospitals, clinics, diagnostic
              laboratories, and rehabilitation units combine innovation with
              compassionate care. Recognized for excellence, our award-winning
              facilities adhere to the highest standards of safety, quality, and
              patient-centered service. Beyond direct care, PulsePoint’s
              clinical facilities support preventive medicine, health education,
              and ongoing research, ensuring that every patient benefits from
              the latest advancements in healthcare. By integrating advanced
              technology, highly skilled professionals, and award-winning
              practices, we deliver timely, effective, and personalized
              healthcare to individuals and communities alike.
            </p>
          </div>
        </div>
      </section>
      {/*Testimonials*/}
      <section className=" bg-blue-50 m-5">
        <h1 className="text-5xl flex flex-row justify-center ">Testimonials</h1>
        <div className="md:flex md:flex-row justify-between">
          {testimonials.map((testimonial, index) => {
            return (
              <Card className="flex flex-col text-center p-2 mt-1" key={index}>
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src={testimonial.person}
                    alt={testimonial.alt}
                    height={70}
                    width={70}
                    className="rounded lg"
                  />

                  <CardTitle>{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  {testimonial.quote}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
