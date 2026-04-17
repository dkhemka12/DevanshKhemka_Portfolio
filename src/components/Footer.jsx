import React from "react";
import pfp from "../assets/images/pfp.jpg";
import { Link } from "react-router-dom";
import siteData from "../content/siteData.js";

const Footer = () => {
  const { profile, socials } = siteData;

  return (
    <>
      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white/10"></div>

      {/* Footer */}
      <footer className="main-container py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

          {/* 🔥 Profile Block */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-4 group">
              
              <img
                src={pfp}
                alt="Devansh"
                className="h-16 w-16 rounded-full object-cover border border-white/20 transition-transform duration-300 group-hover:scale-105"
              />

              <div>
                <h4 className="text-lg font-semibold">{profile.name}</h4>
                <p className="text-sm text-gray-400">{profile.role}</p>
              </div>

            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {profile.intro}
            </p>
          </div>

          {/* 🔹 Accessibility */}
          <div>
            <h5 className="font-medium mb-5 text-sm uppercase tracking-wider text-gray-400">
              Info
            </h5>

            <ul className="flex flex-col gap-2 text-base">
              <li>{profile.location}</li>
              <li>{profile.email}</li>
              <li className="text-gray-400 text-sm">
                {profile.availability}
              </li>
            </ul>
          </div>

          {/* 🔹 Contact */}
          <div>
            <h5 className="font-medium mb-5 text-sm uppercase tracking-wider text-gray-400">
              Contact
            </h5>

            <ul className="flex flex-col gap-2 text-base">
              <li>{profile.email}</li>
              <li>{profile.phone}</li>
            </ul>
          </div>

          {/* 🔹 Socials */}
          <div>
            <h5 className="font-medium mb-5 text-sm uppercase tracking-wider text-gray-400">
              Social
            </h5>

            <ul className="flex flex-col gap-2 text-base">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all duration-300 hover:text-white/70"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </footer>

      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white/10"></div>

      {/* Bottom */}
      <div className="main-container flex flex-col md:flex-row justify-between items-center gap-3 py-6 text-sm text-gray-400">

        <div>
          © 2026 {profile.shortName} — All rights reserved
        </div>

        <div>
          Always learning. Always building.
        </div>

      </div>
    </>
  );
};

export default Footer;