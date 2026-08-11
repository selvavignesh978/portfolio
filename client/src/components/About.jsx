import profileImg from "../assets/profile.png";
import { profile } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center overflow-hidden rounded-2xl">
          <img
            src={profileImg}
            alt={profile.name}
            className="w-64 md:w-80 h-64 md:h-80 object-cover rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-orange-400">Me</span>
          </h2>

          <p
            className="text-gray-400 text-base md:text-lg leading-relaxed md:leading-loose tracking-wide text-left md:text-justify"
            style={{ textAlignLast: "left" }}
          >
            I'm {profile.name}, a motivated and detail-oriented entry-level MERN Stack Developer with
            hands-on experience building production-grade web applications, RESTful APIs, and
            responsive database architecture. I'm proficient in React.js, JavaScript (ES6+), Node.js,
            Express.js, and MongoDB, and I focus on translating UI/UX designs into clean, scalable
            full-stack code. I'm currently seeking an entry-level software engineering role where I
            can grow my skills and contribute to building robust, meaningful web applications.
          </p>
        </div>

      </div>
    </section>
  );
}
