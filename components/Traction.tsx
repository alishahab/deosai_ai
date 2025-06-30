"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col items-start">
        <p className="text-sm font-medium text-green-500 uppercase mb-2">
          World
        </p>
        <h2 className="bold-40 lg:bold-64 mt-2">
          Traction
        </h2>
        <ul className="list-disc list-outside pl-6 text-base mt-10 space-y-3 text-gray-600 regular-20 xl:max-w-[600px]">
          <li>
            Deployed in Lahore outpatient clinics.
          </li>
          <li>
            Pilot demonstrated high transcription accuracy and user satisfaction.
          </li>
          <li>
            Potential clients in multiple countries have reached out to onboard their language in SensAI.
          </li>
        </ul>
      </div>

      <div className="hero-map flex-1">
        {/* Map or image goes here */}
      </div>
    </section>
  );
};

export default Hero;
