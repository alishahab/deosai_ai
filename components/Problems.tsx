"use client";

import React, { useState } from "react";

interface Challenge {
  id: number;
  stat: string;
  description: string;
  detail: string;
  textClass: string;
  bgClass: string;
}

const challengeData: Challenge[] = [
  {
    id: 1,
    stat: "35% of doctors’ time",
    description: "Spent on documenting patient encounters",
    detail:
      "Physicians spend over a third of their clinical hours buried in paperwork—time that could be better spent diagnosing, consulting, and building patient trust.",
    textClass: "text-green-700",
    bgClass: "bg-green-700",
  },
  {
    id: 2,
    stat: "2 hours per day",
    description: "After clinical hours spent on documentation",
    detail:
      "Each evening, doctors devote roughly two extra hours to charting and notes, cutting into personal time and accelerating burnout over the long run.",
    textClass: "text-green-600",
    bgClass: "bg-green-600",
  },
  {
    id: 3,
    stat: "90% of doctors’ notes",
    description: "Contain at least one error",
    detail:
      "Nearly all medical records include mistakes—from typos to critical omissions—jeopardizing patient safety and forcing costly follow-up clarifications.",
    textClass: "text-green-500",
    bgClass: "bg-green-500",
  },
];

const FlipCard = ({
  stat,
  description,
  detail,
  textClass,
  bgClass,
}: Challenge) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[350px] h-[450px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      style={{ perspective: "1000px" }}
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
          className="absolute inset-0 bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3
            className={`text-[56px] font-bold whitespace-pre-line ${textClass}`}
          >
            {stat}
          </h3>
          <p className="text-[24px] font-bold text-gray-700">
            {description}
          </p>
        </div>

        {/* Back */}
        <div
          className={`
            absolute inset-0 rounded-3xl shadow-lg p-8 flex items-center justify-center
            ${bgClass}
          `}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-[18px] text-white leading-snug text-center">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Challenges() {
  return (
    <section className="mt-20 bg-gray-100 py-20">
      <div className="max-container px-4 mx-auto">
        <h2 className="text-[64px] font-bold text-black mb-12 text-left">
          Problem Statement
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {challengeData.map((c) => (
            <FlipCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}




