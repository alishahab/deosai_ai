"use client";
import React from "react";

const gridItems = [
  {
    title: "Effective",
    description:
      "Improve patient care and the lives of doctors, reduces medical errors",
  },
  {
    title: "Scalable",
    description:
      "6–12 weeks’ turnaround time per region / local language",
  },
  {
    title: "Digital Immortality",
    description:
      "Immortalizes the knowledge of every physician it learns from",
  },
  {
    title: "Disruptive",
    description:
      "Standardizes primary care and raises the bar with every patient encounter",
  },
];

// Four distinct gradient variants (A → D)
const gradients = [
  // Variant A – deeper at the low end
  "linear-gradient(135deg, #28b793, #4dd8bf, #2bd7b4, #0ba271, #28b793)",
  // Variant B – brighter, more cyan-leaning
  "linear-gradient(135deg, #2cc2a3, #5ae7d0, #29dabe, #0ca680, #2cc2a3)",
  // Variant C – slightly greener
  "linear-gradient(135deg, #24c497, #3de7cd, #2cd7ad, #0eac89, #24c497)",
  // Variant D – softer, more pastel feel
  "linear-gradient(135deg, #2ec3a4, #75e8d3, #4fe2c0, #26b795, #2ec3a4)",
];

const TwoByTwoGrid: React.FC = () => (
  <section className="max-container padding-container py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {gridItems.map((item, idx) => (
        <div
          key={idx}
          className="p-12 min-h-[300px] text-white flex flex-col justify-center shadow-lg"
          style={{
            background: gradients[idx],
            backgroundSize: "400% 400%",
            animation: "gradientBG 8s ease infinite",
            borderRadius: 0,
          }}
        >
          <h3 className="text-4xl font-extrabold mb-6">{item.title}</h3>
          <p className="text-xl font-semibold leading-snug">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    <style jsx>{`
      @keyframes gradientBG {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `}</style>
  </section>
);

export default TwoByTwoGrid;






