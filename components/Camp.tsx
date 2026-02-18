'use client'

import { useRef } from "react";

type OfferCard = {
  title: string;
  description: string;
  impacts: string[];
  cardClass: string;
};

const offerCards: OfferCard[] = [
  {
    title: "Real-Time Risk Capture",
    description:
      "SensAI listens during patient encounters and automatically identifies potential HCC and risk conditions — ensuring no documentation opportunity is missed.",
    impacts: [
      "Improves risk adjustment accuracy",
      "Reduces missed RAF opportunities",
      "Supports compliant documentation",
    ],
    cardClass: "bg-[#0f7a52] text-white",
  },
  {
    title: "RAF Score Optimization",
    description:
      "SensAI continuously analyzes patient records and suggests documentation opportunities to ensure accurate and defensible RAF scores.",
    impacts: [
      "Maximizes value-based reimbursement",
      "Supports Medicare Advantage workflows",
      "Provides real-time risk insights to providers",
    ],
    cardClass: "bg-[#1f9a67] text-white",
  },
  {
    title: "Automated Clinical Documentation",
    description:
      "SensAI generates structured notes directly into the EHR, eliminating manual typing and reducing documentation time.",
    impacts: [
      "Saves hours per clinician per day",
      "Improves documentation completeness",
      "Reduces burnout",
    ],
    cardClass: "bg-[#5fb88d] text-white",
  },
  {
    title: "Intelligent Inbox Management",
    description:
      "SensAI prioritizes and triages EHR inbox messages, surfacing clinically relevant tasks and automating routine responses.",
    impacts: [
      "Reduces inbox overload",
      "Improves care team efficiency",
      "Accelerates patient communication workflows",
    ],
    cardClass: "bg-[#dff4ea] text-[#0f4f37]",
  },
];

const Camp = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 z-10 flex items-center justify-center p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transform -translate-y-1/2"
        aria-label="Scroll Left"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto"
      >
        {offerCards.map((card) => (
          <article
            key={card.title}
            className={`aspect-[3/2] w-[92vw] max-w-[900px] min-w-[680px] rounded-3xl p-8 lg:p-10 shadow-sm ${card.cardClass} flex flex-col`}
          >
            <div className="my-auto">
            <h3 className="bold-32 leading-tight">{card.title}</h3>
            <p className="regular-16 mt-5 leading-relaxed">{card.description}</p>
            <p className="bold-20 mt-6">Impact:</p>
            <ul className="regular-16 mt-3 list-disc list-outside pl-6 space-y-2">
              {card.impacts.map((impact) => (
                <li key={impact}>{impact}</li>
              ))}
            </ul>
            </div>
          </article>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 z-10 flex items-center justify-center p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transform -translate-y-1/2"
        aria-label="Scroll Right"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default Camp;
