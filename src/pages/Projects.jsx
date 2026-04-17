import React from "react";
import projects from "../components/projectsData";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <>
      <section className="bg-white text-black">
        <div className="main-container py-28">

          {/* 🔥 Heading */}
          <h3 className="text-5xl md:text-6xl lg:text-[4.5vw] font-heading font-bold leading-tight tracking-tight text-center">
            Projects
          </h3>

          {/* 🔥 Grid */}
          <div className="grid md:grid-cols-2 gap-10 mt-12 lg:mt-20">

            {projects.map(({ id, name, image, link, category, summary }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-4"
              >
                
                {/* 🔥 Image + Overlay */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-5">
                    <p className="text-white text-sm leading-relaxed">
                      {summary}
                    </p>
                  </div>
                </div>

                {/* 🔥 Content */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                    {category}
                  </p>

                  <h4 className="text-xl lg:text-2xl font-semibold ">
                    {name}
                  </h4>
                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

      <CTA />
    </>
  );
};

export default Projects;