"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pt-[100px] pb-[200px]">
      <motion.div
        className="get-app w-full rounded-[40px] px-6 md:px-12 lg:px-24 py-20 bg-blue-600"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="z-20 flex flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[1200px] text-white">
            An AI-powered, Synthetic Medical
            Intelligence, will reduce doctor errors
            and time spent on documentation by 90%.
          </h2>

          <div className="flex w-full flex-col gap-6 xl:flex-row">
            <p className="regular-16 text-white xl:flex-1">
              Our flagship product, SensAI automates medical notes, assessments and treatment plans for existing physicians.
            </p>
            <p className="regular-16 text-white xl:flex-1">
              Expands to any local region in 6 to 12 weeks — upload prevalence patterns and train on local language.
            </p>
            <p className="regular-16 text-green-300 xl:flex-1">
              Once SensAI assimilates a case, it never forgets it.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {/* <Button>App Store</Button> */}
            {/* <Button>Google Play</Button> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetApp;




