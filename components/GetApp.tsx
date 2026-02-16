"use client";

import React from "react";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pt-[100px] pb-[200px]">
      <div
        className="get-app w-full min-h-[600px] rounded-[40px] px-6 md:px-12 lg:px-24 py-20"
      >
        <div className="z-20 flex flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[1200px] text-white mt-8">
            SensAI is an AI Copilot for Risk-Optimized Clinical Documentation
          </h2>

          <div className="flex w-full flex-col gap-6 mt-2">
            <p className="text-[17px] lg:text-[18px] text-green-300 xl:max-w-[1200px]">
              SensAI captures clinical conversations in real time, identifies
              risk conditions, optimizes RAF scoring, and automates inbox
              workflows — so clinicians can focus on care while organizations
              maximize value-based revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
