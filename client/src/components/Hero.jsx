import profileImg from "../assets/profile.png";
import { profile } from "../data/portfolioData";
import Resume from "../image&data/Selvavignesh_R_MERN_Resume_v2.pdf"

export default function Hero() {

  // custom scroll function (prevents URL hash issue)
  const scrollToContact = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#020817] text-white flex items-center relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500/30 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <br />
            <span>{profile.name}</span>
          </h1>

          <p className="text-orange-400 mt-2 text-sm md:text-base font-medium">
            {profile.role}
          </p>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            I build modern, scalable web applications using React.js, Node.js,
            Express.js, and MongoDB — translating UI/UX designs into
            production-ready, full-stack code.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4 flex-wrap">

            {/* DOWNLOAD CV */}
            <a
              href={Resume}
              download="Selvavignesh_R_MERN_Resume_v2.pdf"
              className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-400 transition"
            >
              Download Resume
            </a>

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              View Projects
            </a>

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="border border-gray-700 px-6 py-3 rounded-full hover:border-orange-500 hover:text-orange-400 transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0 relative">
          <img
            src={profileImg}
            alt={profile.name}
            className="w-[260px] md:w-[380px] object-cover shadow-2xl transition-transform duration-500 hover:scale-105 rounded-full"
          />
        </div>

      </div>
    </section>
  );
}
