"use client";

import React from "react";
import { motion } from "framer-motion";

type Metric = {
  value: string;
  detail: string;
  direction: "up" | "down";
};

const metrics: Metric[] = [
  {
    value: "RAF score accuracy",
    detail:
      "Driven by continuous RAF documentation suggestions and defensible coding support.",
    direction: "up",
  },
  {
    value: "Risk capture rates",
    detail:
      "Real-time identification of potential HCC and risk conditions during patient encounters.",
    direction: "up",
  },
  {
    value: "Documentation time",
    detail:
      "Automated clinical note generation into the EHR reduces manual typing and charting burden.",
    direction: "down",
  },
  {
    value: "Inbox workload",
    detail:
      "Inbox triage and prioritization surfaces clinically relevant tasks and streamlines team workflows.",
    direction: "down",
  },
  {
    value: "Value-based reimbursement",
    detail:
      "More complete risk capture and RAF optimization support stronger value-based payment performance.",
    direction: "up",
  },
];

const ArrowIcon = ({ direction }: { direction: Metric["direction"] }) => {
  const isUp = direction === "up";
  const iconClass = isUp ? "text-green-600" : "text-orange-50";
  const path = isUp ? "M12 19V5m0 0l-6 6m6-6l6 6" : "M12 5v14m0 0l6-6m-6 6l-6-6";

  return (
    <svg
      className={`h-10 w-10 ${iconClass}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={path}
      />
    </svg>
  );
};

const Traction = () => {
  return (
    <section className="max-container padding-container py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f4fbf8] via-[#eaf7f1] to-[#f8fcfa] p-8 lg:p-12"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-green-100 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-green-50 blur-3xl" />

        <div className="relative z-10">
          <h2 className="bold-40 lg:bold-64 text-gray-90">
            Measurable Financial and Clinical Impact
          </h2>

          <p className="regular-18 mt-5 max-w-[980px] text-gray-50">
            SensAI combines real-time risk detection, RAF-focused documentation
            guidance, automated clinical note generation, and intelligent inbox
            triage to improve both clinical operations and financial outcomes.
          </p>

          <p className="bold-20 mt-10 text-gray-90">Key Metrics</p>

          <div className="relative mt-8">
            <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-green-300 via-green-500 to-green-300" />

            <div className="flex flex-col gap-8">
              {metrics.map((metric, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={metric.value}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="relative grid grid-cols-1 items-center md:grid-cols-2 md:gap-10"
                  >
                    <div className={`${isLeft ? "md:order-1" : "md:order-2"}`}>
                      <article
                        className={`relative h-[230px] rounded-2xl border border-white/70 bg-white/85 shadow-sm backdrop-blur-sm flex flex-col justify-center ${
                          isLeft ? "pl-16 pr-5 py-5" : "pr-16 pl-5 py-5"
                        }`}
                      >
                        <motion.div
                          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${
                            isLeft ? "left-4" : "right-4"
                          }`}
                          animate={{ y: metric.direction === "up" ? [-4, -12, -4] : [4, 12, 4] }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowIcon direction={metric.direction} />
                        </motion.div>
                        <div className="flex items-center gap-2">
                          <h3 className="bold-20 text-green-600">{metric.value}</h3>
                        </div>
                        <p className="regular-16 mt-3 text-gray-50">{metric.detail}</p>
                      </article>
                    </div>

                    <div className={`${isLeft ? "md:order-2" : "md:order-1"}`} />

                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-green-500 shadow" />
                    <div
                      className={`absolute top-1/2 h-[2px] w-8 -translate-y-1/2 bg-green-400 ${
                        isLeft ? "left-[calc(50%-2rem)] -translate-x-full" : "left-1/2"
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Traction;
