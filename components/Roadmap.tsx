"use client";
import React, { useRef, useEffect, useState } from "react";

const roadmap = [
  {
    year: "2025",
    title: "Train.",
    description:
      "Finalize 150K-case training and launch note-taking and physician assistant commercially.",
    bgClass: "bg-white text-gray-800",
  },
  {
    year: "2026",
    title: "Expand.",
    description:
      "Expand case base to 500K and develop Synthetic Medical Intelligence.",
    bgClass: "bg-blue-100 text-gray-900",
  },
  {
    year: "2027",
    title: "Finalize.",
    description:
      "Test SMI across 500 non-physician providers (NPP) and release SMI.",
    bgClass: "bg-green-500 text-white",
  },
];

const Roadmap: React.FC = () => {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(
    Array(roadmap.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-container padding-container py-12">
      <h2 className="bold-40 lg:bold-64 mt-2 mb-20">Roadmap</h2>

      {/* constrain width & remove gaps between tiles */}
      <div className="relative mt-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {roadmap.map((item, i) => (
            <div
              key={i}
              data-idx={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`
                ${item.bgClass}
                p-8 flex flex-col
                transition-all duration-700 ease-out
                ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <h3 className="text-5xl font-semibold">{item.year}</h3>
              <h4 className="mt-2 text-2xl font-medium">{item.title}</h4>
              <p className="mt-4 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;



