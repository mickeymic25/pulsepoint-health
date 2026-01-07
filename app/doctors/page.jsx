import DoctorSearch from "../components/DoctorSearch";
import fetchDoctors from "../data/fetchDoctors";

const Doctors = async () => {
  const doctors = await fetchDoctors();
  return (
    <div className="min-h-screen text-center p-16">
      <h1 className="flex flex-row justify-center m-4 md:m-8">Our Doctors</h1>
      <p>
        Search for doctors across the U.S. by specialty, location, or gender,
        and book your appointment instantly.
      </p>

      <DoctorSearch doctors={doctors} />
    </div>
  );
};

export default Doctors;
