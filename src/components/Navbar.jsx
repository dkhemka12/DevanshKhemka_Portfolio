import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import siteData from "../content/siteData.js";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const { profile } = siteData;

  // GSAP animation
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 z-30 w-full mix-blend-difference"
      >
        <div className="main-container py-6 flex justify-between items-center">

          {/* 🔥 Logo */}
          <Link to="/">
            <Logo className="w-10 h-10 text-white" />
          </Link>

          {/* 🔥 Menu Button */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`w-10 lg:w-12 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
            ></span>

            <span
              className={`w-10 lg:w-12 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
            ></span>
          </div>
        </div>
      </nav>

      {/* 🔥 Fullscreen Menu */}
      <div
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center text-3xl gap-8 transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <Link to="/" className="menu-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link
          to="/projects"
          className="menu-link"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>

        <a
          href={`mailto:${profile.email}`}
          className="menu-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;