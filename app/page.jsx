import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  healthPartners,
  hospitalServices,
  testimonials,
} from "./data/hospitalServices";

export default function Home() {
  return (
    <div className="relative flex flex-col text-center max-w-screen lg:max-xl:h-screen">
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
      <section className="h-9/10 p-5 md:hidden text-center">
        <h1 className="text-5xl flex flex-row justify-center">
          PulsePoint Health
        </h1>
        <p className="text-base">
          We are here to serve people with patient-centered care to deliver
          outstanding healthcare for better lives.
        </p>
      </section>
      <section className=" bg-blue-50 p-5 border-t-8 border-t-blue-700">
        <h1 className="text-5xl flex flex-row justify-center">Our Services</h1>
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
      <section className="min-h-screen text-center p-5 ">
        <h1 className="text-5xl flex flex-row justify-center mb-3">
          Our Doctors
        </h1>
        <p>
          Teamwork and effective communication among Doctors is critical to
          providing high-quality patient care and ensuring positive health
          outcomes
        </p>
      </section>
      {/*Health Partners*/}
      <section className=" p-5">
        <h1 className="text-5xl flex flex-row justify-center mb-3">
          Our Health Partners
        </h1>
        <p>
          Research organisations that collaborate on medical reserach,
          healthcare innovation and the development of new medical technologies
          and treatments.
        </p>
        <div className="gap-3 bg-white p-3 m-2 shadow-lg">
          {healthPartners.map((partner, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-1 "
              >
                <Image
                  src={partner.partnericon}
                  alt={partner.alt}
                  width={150}
                  height={150}
                  className="mt-1"
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="min-h-screen container p-5">
        <h1 className="text-5xl flex flex-row justify-center mb-3">
          Our Facilities
        </h1>
        <Image
          src="/images/facility1.jpg"
          alt="Woman using a microscope"
          height={500}
          width={500}
          className="mb-3"
        />
        <h2 className="mb-3 font-bold">
          Clinical facilities are the backbone of modern healthcare systems
        </h2>
        <p>
          Providing essential resources for the diagnosis, treatment, and
          management of a wide range of medical conditions, PulsePoint's
          clinical facilities set the standard for modern healthcare. Equipped
          with cutting-edge technology and designed for efficiency and patient
          comfort, our hospitals, clinics, diagnostic laboratories, and
          rehabilitation units combine innovation with compassionate care.
          Recognized for excellence, our award-winning facilities adhere to the
          highest standards of safety, quality, and patient-centered service.
          Beyond direct care, PulsePoint’s clinical facilities support
          preventive medicine, health education, and ongoing research, ensuring
          that every patient benefits from the latest advancements in
          healthcare. By integrating advanced technology, highly skilled
          professionals, and award-winning practices, we deliver timely,
          effective, and personalized healthcare to individuals and communities
          alike.
        </p>
      </section>
      {/*Testimonials*/}
      <section className=" bg-blue-50 p-5">
        <h1 className="text-5xl flex flex-row justify-center mb-3">
          Testimonials
        </h1>
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
