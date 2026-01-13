export default async function fetchDoctors() {
  try {
    const response = await fetch(
      "https://doctorsapi.com/api/doctors?limit=25",
      {
        headers: { "api-key": process.env.DOCTORS_API_KEY },
        next: { revalidate: 3600 * 49 },
      }
    );

    if (!response.ok) {
      throw new Error(`Doctor API failed with status ${response.status}`);
    }
    const doctorDetails = await response.json();

    const doctorsData = doctorDetails.doctors || [];

    return doctorsData;
  } catch (error) {
    console.error(error);
    return [];
  }
}
