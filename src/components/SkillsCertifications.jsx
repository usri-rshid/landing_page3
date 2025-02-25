//import React from 'react'
import { SKILLS_CERTIFICATIONS } from "../constants";

const SkillsCertifications = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 p-8" id="Skills_Certifications">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 px-4">
          Skills & Qualifications
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto px-4">
          {SKILLS_CERTIFICATIONS.intro}
        </p>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            {SKILLS_CERTIFICATIONS.skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-bold">{skill.name}</h4>
                  <p className="text-sm text-neutral-500">{skill.level}</p>
                </div>
                <p className="text-gray-700 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h3 className="text-2xl text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            {SKILLS_CERTIFICATIONS.certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl border border-neutral p-6 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={cert.image}
                  alt={`${cert.issuer} certification`}
                  className="w-32 h-32 mb-4 object-contain"
                />
                <h4 className="text-lg font-bold text-center">{cert.title}</h4>
                <p className="text-sm text-neutral-500">{cert.issuer}</p>
                <p className="text-sm text-gray-600 mt-2">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl text-center mb-8">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {SKILLS_CERTIFICATIONS.education.map((edu, index) => (
              <div
                key={index}
                className="flex items-center rounded-2xl border border-neutral p-6 transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-16 h-16 mr-6 object-contain"
                />
                <div>
                  <h4 className="text-lg font-bold">{edu.institution}</h4>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-neutral-500">{edu.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCertifications;