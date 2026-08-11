import { FaGithub, FaDatabase, FaShoppingCart, FaServer } from "react-icons/fa";
import { projects } from "../data/portfolioData";

const iconFor = (i) => [FaDatabase, FaServer, FaShoppingCart][i % 3];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-white bg-[#020617]">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        My <span className="text-orange-400">Projects</span>
      </h2>

      <p className="text-gray-400 text-center mb-14">
        A showcase of my recent full-stack work
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, i) => {
          const Icon = iconFor(i);
          return (
            <div
              key={i}
              className="project-card overflow-hidden rounded-2xl bg-[#0a0f1c] border border-gray-800 hover:scale-[1.02] transition duration-300 flex flex-col"
            >

              {/* ICON HEADER (no fabricated screenshots) */}
              <div className="h-40 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-gray-900">
                <Icon className="text-5xl text-orange-400" />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(", ").map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-center bg-gray-800 hover:bg-gray-700 py-2 rounded-lg text-sm transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
