"use client";

import React, { useState } from "react";

interface Person {
  id: number;
  name: string;
  education: string;
  role?: string;
  imageUrl: string;
  details: string[];
}

const teamMembers: Person[] = [
  {
    id: 1,
    name: "Basmaa Ali",
    education: "MD MBA",
    role: "Primary Care Physician • Serial Entrepreneur • Hiker",
    imageUrl: "/team/basmaa.svg",
    details: [
      "Resident Scientist at LUMS",
      "Instructor in Medicine at Harvard Medical School",
      "Works in Big Data in Medicine",
      "MBA from MIT Sloan School of Management",
      "Founder: Zanjabee Integrative Primary Care in Boston",
    ],
  },
  {
    id: 2,
    name: "Nasir Awan",
    education: "MBBS FCPS",
    role: "Neurosurgeon & Scientist • Serial Entrepreneur • Dreamer",
    imageUrl: "/team/nasir.svg",
    details: [
      "Professor of Neurosurgery",
      "Resident Scientist at School of Science and Engineering",
      "US-trained in Functional Neurosurgery and brain implants",
      "Founder of Spinacure, an integrated-spine startup",
    ],
  },
  
  {
    id: 4,
    name: "Suleman Shahid",
    education: "PhD",
    role: "UX/UI Expert • Traveler & Dreamer",
    imageUrl: "/team/suleman.svg",
    details: [
      "Assoc. Professor of CS at LUMS",
      "Design-driven innovation & change management",
      "PhD in HCI from University of Tilburg",
    ],
  },
  {
    id: 5,
    name: "Adrian Koren",
    education: "MS",
    role: "Software Dev Magician • Traveler",
    imageUrl: "/team/adrian.svg",
    details: [
      "Former Sr Principal Engineer at Autodesk",
      "20+ years building apps & platforms (Vela, Iron Mountain)",
      "MS in CS from University of Massachusetts",
    ],
  },
  {
    id: 6,
    name: "Katie Shields",
    education: "MBA",
    role: "Security & Compliance Lead • Engineer at Heart • Hiker",
    imageUrl: "/team/katie.svg",
    details: [
      "Former Product Manager at Autodesk",
      "Expertise in Security & Compliance",
      "MBA from MIT Sloan • BS Engineering from MIT",
    ],
  },
  {
    id: 7,
    name: "Wenhsiu Hassan",
    education: "MS",
    role: "Business Dev • Techie • Photographer",
    imageUrl: "/team/wenhsiu.svg",
    details: [
      "Sr VP Tech Delivery at Bank of America",
      "Space shuttle materials engineer at Boeing",
      "Retinoblastoma researcher at Children’s Hospital LA",
      "MS Bioengineering from Caltech • BS Physiology from Peking University",
    ],
  },
];

const advisoryMembers: Person[] = [
  {
    id: 1,
    name: "Thomas Heldt",
    education: "PhD",
    imageUrl: "/advisory/thomas.svg",
    role: "Advisor",
    details: [
      "W.M. Keck Career Dev Prof, MIT",
      "Head, Integrative Neuromonitoring & Critical Care Informatics",
      "PhD in Med Eng & Med Physics, MIT (2004)",
      "MPhil Physics, Yale (1997)",
    ],
  },
  {
    id: 2,
    name: "Kirsten Meisinger",
    education: "MD",
    imageUrl: "/advisory/kirsten.svg",
    role: "Advisor",
    details: [
      "Faculty, Dept. of Family Medicine, Harvard Med School",
      "Director of Provider Engagement, Cambridge Health Alliance",
      "MD, Case Western Reserve • BA, Brown University",
    ],
  },
  {
    id: 3,
    name: "Tania Aidruss",
    education: "MBA",
    imageUrl: "/advisory/tania.svg",
    role: "Advisor",
    details: [
      "CEO, DGlobal",
      "Chairperson, Digital Pakistan Authority",
      "Senior Executive at Google",
      "MBA, MIT Sloan • BS, Brandeis University",
    ],
  },
  {
    id: 4,
    name: "William Slaughter",
    education: "MD",
    imageUrl: "/advisory/william.svg",
    role: "Advisor",
    details: [
      "Faculty, Dept of Psychiatry, Harvard Med School",
      "Psychiatry Residency, Cambridge Health Alliance",
      "MD & BA, University of Washington",
    ],
  },
  {
    id: 5,
    name: "Agha Ali Raza",
    education: "PhD",
    role: "Advisor",
    imageUrl: "/team/agha.svg",
    details: [
      "Asst. Professor of CS at LUMS",
      "Founding Director, Center for Speech & Language Technologies",
      "PhD in Machine Learning from CMU",
    ],
  },
];

const PersonFlipCard: React.FC<Person> = ({
  name,
  education,
  role,
  imageUrl,
  details,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[280px] h-[360px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      style={{ perspective: "800px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={imageUrl}
            alt={name}
            className="w-40 h-40 rounded-full object-cover mb-3"
          />
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-green-700 font-medium mb-1">{education}</p>
          {role && <p className="text-gray-700 text-center">{role}</p>}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-[#00A86B] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <ul className="text-sm text-white space-y-2">
            {details.map((line, i) => (
              <li key={i}>• {line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function TeamAndAdvisory() {
  return (
    <section className="mt-20 bg-gray-100 py-20">
      <div className="max-container px-4 mx-auto">
        {/* Team */}
        <h2 className="text-[64px] font-bold text-black mb-12 text-left">
          The Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {teamMembers.map((p) => (
            <PersonFlipCard key={p.id} {...p} />
          ))}
        </div>

        {/* Advisory */}
        <h2 className="text-[64px] font-bold text-black mt-20 mb-12 text-left">
          The Advisory Board
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {advisoryMembers.map((p) => (
            <PersonFlipCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
