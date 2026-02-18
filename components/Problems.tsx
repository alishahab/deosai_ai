"use client";

import React, { useState } from "react";

interface Challenge {
  id: number;
  stat: string;
  description: string;
  detail: string;
  textClass: string;
  bgClass: string;
  icon: "documentation" | "risk" | "workflow";
}

const challengeData: Challenge[] = [
  {
    id: 1,
    stat: "Overload",
    description: "Documentation",
    detail:
      "The problem\nPhysicians spend over 2 hours on EHR documentation for every hour of patient care. Manual note-taking and administrative burden consume clinical time.\n\nThe result\n• Clinician burnout increases\n• Less time is spent with patients\n• Healthcare delivery becomes less efficient",
    textClass: "text-green-700",
    bgClass: "bg-green-700",
    icon: "documentation",
  },
  {
    id: 2,
    stat: "Lost Revenue",
    description: "Missed Risk",
    detail:
      "The problem\nRisk conditions are frequently under-documented or miscoded. Without complete documentation, health systems fail to capture the true clinical complexity of patients.\n\nThe result\n• Lost reimbursement\n• Lower RAF scores\n• Reduced value-based revenue",
    textClass: "text-green-600",
    bgClass: "bg-green-600",
    icon: "risk",
  },
  {
    id: 3,
    stat: "Workflows",
    description: "Fragmented",
    detail:
      "The problem\nCare teams face inbox overload and disconnected systems. Health organizations lack real-time intelligence to identify risk and act efficiently.\n\nThe result\n• Operational inefficiencies\n• Increased administrative burden\n• Lower quality longitudinal patient care",
    textClass: "text-green-500",
    bgClass: "bg-green-500",
    icon: "workflow",
  },
];

const FlipCard = ({
  id,
  stat,
  description,
  detail,
  textClass,
  bgClass,
}: Challenge) => {
  const [flipped, setFlipped] = useState(false);

  const renderIcon = () => {
    if (id === 1) {
      return (
        <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" aria-hidden="true">
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }

    if (id === 2) {
      return (
        <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" aria-hidden="true">
          <path d="M4 18l6-6 4 4 6-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 8h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" aria-hidden="true">
        <path d="M3 7h12M3 12h10M3 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 7l4 0M17 12l4 0M17 17l4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  };

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
          className="absolute inset-0 bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`mb-6 ${textClass}`}>{renderIcon()}</div>
          <h3
            className={`text-[34px] leading-tight font-bold whitespace-pre-line text-center ${textClass}`}
          >
            {`${description}\n${stat}`}
          </h3>
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
