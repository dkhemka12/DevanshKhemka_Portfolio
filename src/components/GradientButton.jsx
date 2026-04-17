import React from "react";
import { Link } from "react-router-dom";

const isExternalLink = (link) =>
  typeof link === "string" &&
  (link.startsWith("http") ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:"));

const sharedClassName =
  "btn inline-flex items-center justify-center uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-2 lg:py-3 rounded-full max-sm:text-lg transition-all duration-300";

const GradientButton = ({ text, link, className = "" }) => {
  if (isExternalLink(link)) {
    return (
      <a
        href={link}
        className={`${sharedClassName} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link to={link} className={`${sharedClassName} ${className}`}>
      {text}
    </Link>
  );
};

export default GradientButton;