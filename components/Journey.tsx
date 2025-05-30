"use client";
import React, { useRef, useEffect, useState } from "react";

const steps = [
  {
    label: "Year 1a – Jan to June",
    bullets: [
      "Record and process 150,000 cases",
      "Develop and launch Patient App",
    ],
  },
  {
    label: "Year 1b – July to Dec",
    bullets: ["Launch Physician’s Assistant in Middle East"],
  },
  {
    label: "Year 2",
    bullets: [
      "Expand deployment of Physician’s Assistant to 1000+ stations and fine tune with edge use cases",
      "Configure SMI with its own guard rails and referral tree",
    ],
  },
  {
    label: "Year 3",
    bullets: [
      "Launch SMI – Supervised rollout for 500 Non-Physician Providers with training",
    ],
  },
];

const Journey: React.FC = () => {
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const arrowsRef = useRef<HTMLDivElement | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    steps.map(() => false)
  );
  const [arrowsVisible, setArrowsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute("data-idx");
          if (idxAttr !== null) {
            const idx = Number(idxAttr);
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          } else if (entry.target === arrowsRef.current && entry.isIntersecting) {
            setArrowsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    if (arrowsRef.current) observer.observe(arrowsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-container padding-container py-16">
      <p
        className={`text-base font-medium text-green-500 uppercase mb-3 transition-opacity duration-1000 ${
          visibleSteps.some((v) => v) ? "opacity-100" : "opacity-0"
        }`}
      >
        Timeline
      </p>
      <h2
        className="bold-40 lg:bold-64 mt-2 mb-16 transition-opacity duration-1000 delay-200"
        style={{
          opacity: visibleSteps.some((v) => v) ? 1 : 0,
        }}
      >
        Journey
      </h2>

      <div className="relative mt-12 max-w-4xl mx-auto">
        {/* Year columns */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-16">
          {steps.map((step, i) => (
            <div
              key={i}
              data-idx={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`relative pl-6 transition-all ease-out duration-1000 ${
                visibleSteps[i]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              <div className="absolute left-0 top-0 h-full border-l-4 border-green-500" />
              <h4 className="text-xl font-semibold text-green-600 mb-3">
                {step.label}
              </h4>
              <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
                {step.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Arrows + labels */}
        <div ref={arrowsRef} className="mt-20 flex items-center justify-center w-full">
          <div
            className={`relative w-2/3 h-2 bg-blue-200 origin-left transition-transform ease-out duration-2000 ${
              arrowsVisible ? "scale-x-100" : "scale-x-0"
            }`}
          >
            <span
              className={`absolute -top-10 left-1/2 transform -translate-x-1/2 text-lg text-green-600 font-bold transition-opacity duration-1000 delay-300 ${
                arrowsVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              $5M
            </span>
            <div className="absolute -right-3 top-0 w-0 h-0 border-l-6 border-t-4 border-b-4 border-transparent border-l-blue-200" />
          </div>
          <div
            className={`relative w-1/3 h-2 bg-blue-600 origin-left transition-transform ease-out duration-2000 ${
              arrowsVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <span
              className={`absolute -top-10 left-1/2 transform -translate-x-1/2 text-lg text-green-600 font-bold transition-opacity duration-1000 delay-900 ${
                arrowsVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              $10M
            </span>
            <div className="absolute -right-3 top-0 w-0 h-0 border-l-6 border-t-4 border-b-4 border-transparent border-l-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;





