import React from "react";
import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    number: "01",
    skills: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript (ES6+)", "React.js"],
  },
  {
    title: "Backend",
    number: "02",
    skills: [
      "Java",
      "Spring Boot",
      "Servlet",
      "JDBC",
      "JPA / Hibernate",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    number: "03",
    skills: ["MySQL", "Oracle SQL"],
  },
  {
    title: "Tools",
    number: "04",
    skills: ["Git & GitHub", "Maven", "Eclipse IDE", "VS Code", "Postman"],
  },
];

const softSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Creativity",
  "Adaptability",
  "Time Management",
];

function Skills() {
  return (
    <section
      id="Skill"
      className="py-5 min-vh-100 bg-black text-white d-flex align-items-center"
    >
      <div className="container py-5">
        {/* HEADER */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="fw-bold mt-2 mb-2"
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              letterSpacing: "-2px",
            }}
          >
            Tools I use to <span className="text-success">build.</span>
          </h2>

          <p className="text-secondary mb-0" style={{ fontSize: "15px" }}>
            Technologies and tools I use to create reliable and modern web
            applications.
          </p>
        </motion.div>

        {/* SKILL GROUPS */}
        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <motion.div
              className="col-12 col-md-6 col-lg-3"
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="h-100 border-top border-secondary border-opacity-50 pt-3">
                {/* NUMBER + TITLE */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-bold mb-0">{group.title}</h5>

                  <small className="text-success">{group.number}</small>
                </div>

                {/* SKILLS */}
                <div>
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="d-flex align-items-center justify-content-between py-2 border-bottom border-secondary border-opacity-25"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span
                        className="text-secondary"
                        style={{ fontSize: "13px" }}
                      >
                        {skill}
                      </span>

                      <i
                        className="fa-solid fa-arrow-up-right-from-square text-success"
                        style={{ fontSize: "9px", opacity: 0.6 }}
                      ></i>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SOFT SKILLS */}
        <motion.div
          className="border-top border-secondary border-opacity-25 mt-4 pt-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="row align-items-center">
            <div className="col-lg-3 mb-3 mb-lg-0">
              <small
                className="text-success fw-semibold text-uppercase"
                style={{ fontSize: "10px", letterSpacing: "1.5px" }}
              >
                Soft Skills
              </small>
            </div>

            <div className="col-lg-9">
              <div className="d-flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="border border-secondary border-opacity-50 rounded-pill px-3 py-2 text-secondary"
                    style={{ fontSize: "11px" }}
                    whileHover={{ color: "#198754", borderColor: "#198754" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
