"use client";
import Image from 'next/image';
import React from 'react';

const Guide: React.FC = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-0 flex flex-col items-start">
        <h2 className="bold-40 lg:bold-64 mb-8">
          Ground Framework for Care
        </h2>
        <p className="regular-16 text-gray-30 mb-10 xl:max-w-[520px]">
        </p>
        <div className="w-full">
          <Image
            src="/framework.svg"
            alt="Ground Framework for Care"
            width={1920}
            height={600}
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="max-container px-4 mx-auto">
        <p className="regular-20 mt-6 text-gray-30 xl">
          SensAI’s Ground Framework for Care illustrates a closed-loop pathway that starts at the patient’s home, where an SMI-trained operator handles daily monitoring, and scales seamlessly up through the GP clinic, dedicated chronic-care teams, labs / imaging, and—when required—tertiary hospitals. At every hand-off, synthetic medical intelligence surfaces the right questions, flags abnormalities, and routes patients to the next level of care, preserving continuity even in settings with few physicians. 
        </p>


      </div>
      </div>
    </section>
  );
};

export default Guide;

