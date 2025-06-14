'use client'

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useRef } from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* Left arrow */}
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

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Advanced speech-to-text engine for local dialects."
          subtitle=""
          peopleJoined=""
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="AI-driven medical knowledge base prompts doctors to ask all the right questions."
          subtitle=""
          peopleJoined=""
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Intuitive UI enabling rapid adoption with minimal training."
          subtitle=""
          peopleJoined=""
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="Seamless EHR integration for continuity of care."
          subtitle=""
          peopleJoined=""
        />
      </div>

      {/* Right arrow */}
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

