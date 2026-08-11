import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVscodium,
  SiNpm
} from "react-icons/si";
import { skills as skillData } from "../data/portfolioData";

const iconMap = {
  "HTML5": { icon: FaHtml5, color: "text-orange-500" },
  "CSS3": { icon: FaCss3Alt, color: "text-blue-500" },
  "JavaScript (ES6+)": { icon: FaJs, color: "text-yellow-400" },
  "React.js": { icon: FaReact, color: "text-cyan-400" },
  "Bootstrap": { icon: FaBootstrap, color: "text-purple-500" },
  "Flexbox": { icon: FaCss3Alt, color: "text-blue-400" },
  "Responsive Web Design": { icon: FaHtml5, color: "text-orange-400" },
  "Node.js": { icon: FaNodeJs, color: "text-green-500" },
  "Express.js": { icon: SiExpress, color: "text-gray-300" },
  "RESTful APIs": { icon: FaNodeJs, color: "text-green-400" },
  "Async Programming": { icon: FaJs, color: "text-yellow-300" },
  "CRUD Operations": { icon: SiExpress, color: "text-gray-300" },
  "MongoDB": { icon: SiMongodb, color: "text-emerald-500" },
  "Mongoose ORM": { icon: SiMongodb, color: "text-emerald-400" },
  "Schema Design": { icon: SiMongodb, color: "text-emerald-300" },
  "Git": { icon: FaGitAlt, color: "text-orange-500" },
  "GitHub": { icon: FaGithub, color: "text-gray-200" },
  "Postman": { icon: SiPostman, color: "text-orange-400" },
  "VS Code": { icon: SiVscodium, color: "text-blue-400" },
  "npm": { icon: SiNpm, color: "text-red-500" },
  "GitHub Pages": { icon: FaGithub, color: "text-gray-200" }
};

const categories = [
  { label: "Frontend", items: skillData.frontend },
  { label: "Backend", items: skillData.backend },
  { label: "Database", items: skillData.database },
  { label: "Tools & Workflow", items: skillData.tools }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-center">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Tech Stack &amp; <span className="text-orange-400">Skills</span>
      </h2>

      <p className="text-gray-400 mb-14 max-w-xl mx-auto">
        A modern MERN-focused stack for building fast, scalable web applications.
      </p>

      {/* Category grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.label} className="skill-card p-6 text-left ">
            <h3 className="text-lg font-semibold text-orange-400 mb-5">
              {cat.label}
            </h3>

            <div className="flex flex-col gap-3">
              {cat.items.map((name) => {
                const entry = iconMap[name] || { icon: FaJs, color: "text-gray-300" };
                const Icon = entry.icon;
                return (
                  <div key={name} className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Icon className={`text-base ${entry.color}`} />
                    </div>
                    <span className="text-sm text-black-300">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
