## PulsePoint Health 🩺

PulsePoint Health is a doctor appointment booking platform that allows users to find and book doctors across the United States.  
The app integrates with the Doctors API to filter doctors by location, specialty, and gender.

 Live site: https://pulsepoint-health-psi.vercel.app/  


## 🚀 Features

- Browse doctors across the United States  
- Filter doctors by:
  - Location  
  - Medical specialty  
  - Gender  
- Book doctor appointments through a user form  
- Fully responsive design (mobile, tablet, desktop)  
- Fast performance with Next.js  
- Styled with Tailwind CSS  
- Deployed on Vercel  

## 🛠 Tech Stack

- Next.js  
- React  
- Tailwind CSS  
- Doctors API (https://doctorsapi.com)  
- Vercel  

## 📌 About the Project

PulsePoint Health is a frontend appointment booking system designed to simulate a real healthcare platform.  
Users can search for doctors and schedule appointments using filters such as location, specialty, and gender.

This project demonstrates:
- API integration and data fetching  
- Filtering and dynamic UI rendering  
- React state management and controlled forms  
- Component-based architecture  
- Responsive UI/UX design  
- Next.js routing and deployment  



## ✨ API Integration

This project uses the **Doctors API** to retrieve doctor data.

### Filters supported:
- **Location** (US-based doctors)  
- **Specialty** (e.g. cardiology, dermatology, pediatrics)  
- **Gender** (male, female, etc.)  

The API is consumed on the frontend to dynamically display and filter doctors in real time.

## 📂 Project Structure

```
pulsepoint-health/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── App.jsx
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── package.json
├── package-lock.json
└── README.md
```
🧑‍💻 Getting Started (Local Setup)

Clone the repository
```
bash
git clone https://github.com/mickeymic25/pulsepoint-health.git
```

Navigate to the project folder
```
bash

cd pulsepoint-health
```

Install dependencies
```
bash

npm install
```

Run the development server
```
bash

npm run dev
```

Open in your browser:
```
http://localhost:3000
```

## 📦 Build for Production
```
bash

npm run build
```

Start the production server:
```
bash

npm start
```

## ☁️ Deployment

This project is deployed using Vercel.


## 🧠 Learning Outcomes

- Working with external REST APIs in Next.js
- Building filtering logic in React
- Managing form state and user input
- Component-based frontend architecture
- Responsive design with Tailwind CSS
- Deploying production apps with Vercel


## 📜 Disclaimer

This project is for educational and portfolio purposes only and does not provide real medical services.
