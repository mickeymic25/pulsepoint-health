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
    <div className="  flex flex-col text-center max-w-screen lg:max-xl:h-screen">
      <section className="relative w-full h-[300px] md:h-screen overflow-hidden ">
        <Image
          src="/images/hero-banner-image.jpg"
          fill={true}
          className="object-cover object-center"
          alt="Hero Image"
          priority
        />
        <div className="absolute inset-0 flex items-center ">
          <div className="bg-white/90 md:p-6 rounded-md">
            <img
              src="/images/pph-banner-logo-transparent.png"
              className="w-56 md:w-xl"
            />
            <h3 className="italic md:pb-6">
              Committed to delivering quality, patient-centered healthcare
            </h3>
            <div className=" flex flex-col md:flex-row md:m-4 md:justify-start md:gap-2">
              <Button variant="default">Book an appointment</Button>
              <Button variant="secondary">Find a Doctor</Button>
            </div>
          </div>
        </div>
      </section>

      <section className=" min-h-screen text-center m-5">
        <h1 className="flex flex-row justify-center">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className=" relative h-1/2 w-full md:w-1/2 md:h-full ">
            <img
              className=" h-full w-full"
              src="/images/ellipse.png "
              alt="big blue ellipse"
            />
            <img
              className=" absolute bottom-0 max-w-[1000px] h-full left-20 md:xl:left-40"
              src="/images/intro-doctor.png"
              alt="female doctor"
            />
          </div>
          <div className="h-1/2 w-full pt-2 py-2 md:py-4 md:w-1/2 md:h-full flex flex-col justify-between  ">
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

            <p className=" text-right italic font-bold p-2 md:p-10 ">
              "We are committed to serving people with patient-centered care and
              to deliver outstanding healthcare for better lives." <br />
              -Dr.Steve Jones
            </p>
          </div>
        </div>
      </section>
      <section className="m-5 min-h-screen flex flex-col items-center justify-center  ">
        <img
          src="/images/main-pulse-image-logo-transparent.png "
          className="size-10 md:w-auto md:
          h-auto mb-10 md:mb-32"
        />
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
        <img
          src="/images/main-pulse-image-logo-transparent.png "
          className="size-10 md:w-auto md:
          h-auto mb-10 md:mb-32"
        />
        <h1>Our Doctors</h1>
        <p>
          Teamwork and effective communication among Doctors is critical to
          providing high-quality patient care and ensuring positive health
          outcomes.
        </p>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-2 md:gap-5 md:my-10  md:flex-wrap">
          {homepageDoctors.map((doctor, index) => {
            return (
              <div
                key={index}
                className="w-70 md:w-80 h-auto justify-center items-center"
              >
                <img
                  src={doctor.img}
                  alt={doctor.alt}
                  className="mt-1 object-cover rounded-2xl w-full h-full"
                />
                <h3>{doctor.name}</h3>
                <p>{doctor.speciality}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button variant="secondary">Find a Doctor</Button>
        </div>
      </section>
      {/*Health Partners*/}
      <section className="m-5 min-h-screen flex flex-col items-center justify-center">
        <img
          src="/images/main-pulse-image-logo-transparent.png "
          className="size-10 md:w-auto md:
          h-auto mb-10 md:mb-32"
        />
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
        <img
          src="/images/main-pulse-image-logo-transparent.png "
          className="size-10 md:w-auto md:
          h-auto mb-10 md:mb-32"
        />
        <h1>Our Facilities</h1>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="relative h-full w-full md:w-1/2 md:h-full  flex not-only-of-type:justify-center items-center ">
            <img
              src="/images/facility1.jpg"
              alt="Woman using a microscope"
              className="rounded-2xl  h-auto max-w-7/12  md:left-64"
            />
            <img
              src="/images/julia-koblitz-lab-unsplash.jpg"
              alt="Laboratory"
              className=" rounded-2xl absolute h-auto max-w-7/12 right-10 top-20  md:top-50 md:left-20
               "
            />
          </div>
          <div className="h-1/2 w-full pt-2 py-2 mt-16 md:w-1/2 md:h-full flex flex-col  items-center justify-center">
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
      <section className="m-5 h-auto w-auto flex flex-col items-center ">
        <img
          src="/images/main-pulse-image-logo-transparent.png "
          className="size-10 md:w-auto md:
          h-auto mb-10 md:mb-20"
        />
        <h1 className=" flex flex-row justify-center ">Testimonials</h1>
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
