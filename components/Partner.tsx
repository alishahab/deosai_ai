"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const PartnerWithUs = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 pb-[300px]">
      <div className="max-container padding-container relative w-full flex items-start justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%] relative lg:top-20 lg:ml-12 pl-16">
          <p className="text-green-600 uppercase font-semibold tracking-wide">
            Call to Action
          </p>

          <h2 className="bold-40 lg:bold-64 mt-2">
            Better Documentation. Stronger Risk Capture. Happier Clinicians.
          </h2>

          <p className="mt-10 text-gray-600 regular-20">
            SensAI empowers care teams to document smarter, capture risk
            completely, and focus on patient care — while helping organizations
            thrive in value-based payment models.
          </p>

          <div className="mt-20 flex w-full flex-col gap-4 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Schedule a Demo"
              variant="btn_green"
              onClick={() => setOpen(true)}
            />
            <Button
              type="button"
              title="Talk to Our Team"
              variant="btn_dark_green"
              href="mailto:hello@deosai.ai"
            />
          </div>
          <Modal
            open={open}
            url="https://www.cognitoforms.com/WenhsiuHassan/BasicContactForm"
            onClose={() => setOpen(false)}
            title="Schedule a Demo"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;



