import React from "react";
import siteData from "../content/siteData.js";

const Contact = () => {
  const { profile, socials } = siteData;

  return (
    <section className="bg-white text-black">
      <div className="main-container py-28 lg:py-36">

        {/* 🔥 Availability */}
        <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-6">
          {profile.availability}
        </p>

        {/* 🔥 Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-[4.5vw] font-heading font-bold leading-[1] tracking-tight max-w-3xl">
          {profile.ctaTitle}
        </h1>

        {/* 🔥 Contact Info */}
        <div className="mt-12 flex flex-col gap-4 text-lg lg:text-2xl">

          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-3 w-fit transition-all duration-300 hover:translate-x-1"
          >
            <span className="text-gray-400 text-sm uppercase tracking-wider">
              Email
            </span>
            <span className="font-medium group-hover:underline">
              {profile.email}
            </span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="group flex items-center gap-3 w-fit transition-all duration-300 hover:translate-x-1"
          >
            <span className="text-gray-400 text-sm uppercase tracking-wider">
              Phone
            </span>
            <span className="font-medium group-hover:underline">
              {profile.phone}
            </span>
          </a>

          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm uppercase tracking-wider">
              Location
            </span>
            <span className="font-medium">{profile.location}</span>
          </div>

        </div>

        {/* 🔥 Social Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-full border border-black px-6 py-2 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-black hover:text-white"
            >
              <span className="group-hover:tracking-[0.25em] transition-all">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* 🔥 Bottom Line */}
        <p className="mt-16 text-sm text-gray-500 max-w-md leading-relaxed">
          Prefer email for quick responses. Open to internships, collaborations,
          and interesting projects.
        </p>

      </div>
    </section>
  );
};

export default Contact;