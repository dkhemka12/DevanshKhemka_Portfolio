import React, { useRef } from "react";
import siteData from "../content/siteData.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { skills } = siteData;
  const cardsRef = useRef([]);

  const serviceCardClasses = [
    "bg-black text-white",
    "bg-[#E9E9F0] text-black",
    "bg-white text-black",
    "bg-[#111827] text-white",
    "bg-[#F4F1EA] text-black",
    "bg-[#0F172A] text-white",
  ];

  const skillGroups = [
    { id: "01", title: "Frontend", items: skills.frontend },
    { id: "02", title: "Backend", items: skills.backend },
    { id: "03", title: "Database", items: skills.database },
    { id: "04", title: "Auth & Security", items: skills.auth },
    { id: "05", title: "Realtime & APIs", items: skills.realtime },
    { id: "06", title: "Tools & Workflow", items: skills.tools },
  ];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = cardsRef.current.filter(Boolean);

    if (!cards.length) return;

    if (prefersReducedMotion) {
      gsap.set(cards, { clearProps: "all", opacity: 1, y: 0, scale: 1 });
      return;
    }

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 48,
          opacity: 0,
          scale: 0.985,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "top 52%",
            scrub: 0.9,
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Title */}
      <div className="bg-white text-black">
        <div className="main-container py-8">
          <h3 className="text-2xl font-semibold">Stack I Know</h3>
        </div>
      </div>

      {/* Normal Flow Stack */}
      <div className="main-container flex flex-col gap-12 pb-20">
        {skillGroups.map((group, index) => (
          <div
            key={group.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`${serviceCardClasses[index % serviceCardClasses.length]
              } rounded-[1.5rem] p-6 md:p-10 shadow-2xl border border-white/10`}
          >
            <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-center">

              {/* Left */}
              <div>
                <span className="text-gray-400 text-sm">
                  {group.id}
                </span>

                <h2 className="text-4xl md:text-6xl font-bold mt-2">
                  {group.title}
                </h2>
              </div>

              {/* Right */}
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <div
                    key={typeof item === "string" ? item : item.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-current/20 bg-white/10 text-sm md:text-base font-medium backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
                  >
                    {typeof item !== "string" && item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-5 h-5"
                      />
                    )}
                    <span>
                      {typeof item === "string" ? item : item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;