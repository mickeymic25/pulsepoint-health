import DoctorSearch from "../components/DoctorSearch";
import fetchDoctors from "../data/fetchDoctors";

const Doctors = async () => {
  const doctors = await fetchDoctors();
  return (
    <div className="min-h-screen text-center p-16">
      <h1 className="flex flex-row justify-center">Our Doctors</h1>

      <DoctorSearch doctors={doctors} />
    </div>
  );
};

export default Doctors;
