import { experience, education } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Experience &amp; <span className="text-orange-400">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* WORK EXPERIENCE */}
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold">{job.role}</h4>
                    <span className="text-xs text-gray-500">{job.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{job.company}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Education &amp; Certifications</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold">{edu.title}</h4>
                    <span className="text-xs text-gray-500">{edu.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">{edu.place}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
