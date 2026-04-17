import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import siteData from "../content/siteData.js";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const { profile } = siteData;
  const aboutRef = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(".about-text", {
      type: "lines, words", // ✅ FIXED (no char splitting)
    });

    // initial state
    gsap.set(split.words, {
      opacity: 0,
      y: 20,
    });

    // animation
    gsap.to(split.words, {
      opacity: 1,
      y: 0,
      stagger: 0.03, // slightly smoother
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        end: "center center",
        scrub: 1,
      },
    });

    return () => split.revert();
  }, { scope: aboutRef });

  return (
    <section
      ref={aboutRef}
      className="bg-white text-black rounded-tl-[60px] rounded-tr-[60px] relative z-10"
    >
      <div className="main-container py-24 lg:py-32 flex flex-col gap-12">

        {/* Label */}
        <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
          About Me
        </p>

        {/* 🔥 Text */}
        <div
  className="
  about-text
  font-heading
  text-3xl md:text-5xl xl:text-[52px] 2xl:text-6xl
  leading-[1.2]
  max-w-6xl
"
>
  {profile.about}
</div>

        {/* Info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500">
          <span>{profile.role}</span>
          <span>•</span>
          <span>{profile.location}</span>
          <span>•</span>
          <span>{profile.availability}</span>
        </div>

      </div>
    </section>
  );
};

export default About;