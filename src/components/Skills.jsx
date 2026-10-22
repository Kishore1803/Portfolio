import React from "react";
import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    number: "01",
    icon: "fa-code",
    color: "#00E5FF",
    skills: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript (ES6+)", "React.js"],
  },
  {
    title: "Backend",
    number: "02",
    icon: "fa-server",
    color: "#C084FC",
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
    icon: "fa-database",
    color: "#38F8C1",
    skills: ["MySQL", "Oracle SQL"],
  },
  {
    title: "Tools",
    number: "04",
    icon: "fa-screwdriver-wrench",
    color: "#FF75D8",
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
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "transparent",
        scrollMarginTop: "70px",
      }}
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          className="mb-5 mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="d-flex align-items-center gap-2 mb-3"
            style={{ color: "#00E5FF" }}
          >
            <span
              className="fw-bold text-uppercase"
              style={{ fontSize: "12px", letterSpacing: "4px" }}
            >
              My Tech Stack
            </span>
          </div>

          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(38px, 5vw, 62px)",
              letterSpacing: "-2px",
              lineHeight: 1.2,
              color: "#FFFFFF",
              textShadow: "0 2px 14px rgba(0,0,0,0.9)",
            }}
          >
            Tools I use to <span>build</span>
          </h2>

          <p
            className="mb-0"
            style={{
              color: "#F1F5FF",
              fontSize: "16px",
              lineHeight: 1.9,
              maxWidth: "650px",
              textShadow: "0 2px 8px #000000, 0 0 3px #000000",
            }}
          >
            Technologies and tools I use to create modern, responsive, and
            reliable web applications.
          </p>
        </motion.div>

        {/* Technical skill cards */}
        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <motion.div
              className="col-12 col-md-6 col-lg-3"
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <motion.div
                className="h-100 p-4"
                style={{
                  background: "transparent",
                  border: `1px solid ${group.color}`,
                  borderTop: `3px solid ${group.color}`,
                  borderRadius: "14px",
                  boxShadow: `0 0 16px ${group.color}25, inset 0 0 15px ${group.color}08`,
                  transition: "box-shadow 0.3s ease",
                }}
                whileHover={{
                  y: -7,
                  boxShadow: `0 0 28px ${group.color}55, inset 0 0 20px ${group.color}12`,
                }}
              >
                {/* Icon and number */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <motion.div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      border: `1px solid ${group.color}`,
                      color: group.color,
                      fontSize: "22px",
                      boxShadow: `0 0 18px ${group.color}30`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 4 }}
                  >
                    <i className={`fa-solid ${group.icon}`} />
                  </motion.div>

                  <span
                    className="fw-bold"
                    style={{
                      color: group.color,
                      fontSize: "14px",
                      letterSpacing: "2px",
                      textShadow: `0 0 12px ${group.color}80`,
                    }}
                  >
                    / {group.number}
                  </span>
                </div>

                <h5
                  className="fw-bold mb-2"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "21px",
                    textShadow: "0 2px 8px #000000",
                  }}
                >
                  {group.title}
                </h5>

                <div
                  className="mb-3"
                  style={{
                    height: "3px",
                    width: "42px",
                    borderRadius: "5px",
                    background: group.color,
                    boxShadow: `0 0 12px ${group.color}`,
                  }}
                />

                {/* Skill names */}
                <div>
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="d-flex align-items-center gap-2 py-2"
                      style={{
                        borderBottom:
                          skillIndex === group.skills.length - 1
                            ? "none"
                            : "1px solid rgba(255,255,255,0.2)",
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <i
                        className="fa-solid fa-angle-right"
                        style={{
                          color: group.color,
                          fontSize: "11px",
                          flexShrink: 0,
                          textShadow: `0 0 8px ${group.color}`,
                        }}
                      />

                      <span
                        style={{
                          color: "#FFFFFF",
                          fontSize: "13px",
                          fontWeight: 500,
                          lineHeight: 1.7,
                          textShadow: "0 1px 5px #000000, 0 0 2px #000000",
                        }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          className="mt-5 pt-4"
          style={{
            borderTop: "1px solid rgba(0,229,255,0.65)",
            boxShadow: "0 -5px 18px -15px #00E5FF",
          }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-3">
              <div className="d-flex align-items-center gap-3">
                <i
                  className="fa-solid fa-brain"
                  style={{
                    fontSize: "28px",
                    color: "#C084FC",
                    filter: "drop-shadow(0 0 9px #C084FC)",
                  }}
                />

                <div>
                  <h5
                    className="fw-bold mb-1"
                    style={{
                      color: "#FFFFFF",
                      textShadow: "0 2px 8px #000000",
                    }}
                  >
                    Soft Skills
                  </h5>

                  <small
                    style={{
                      color: "#E9D5FF",
                      fontSize: "12px",
                      textShadow: "0 1px 5px #000000",
                    }}
                  >
                    Beyond the code
                  </small>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-9">
              <div className="d-flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="rounded-pill px-3 py-2"
                    style={{
                      color: "#FFFFFF",
                      background: "transparent",
                      border: `1px solid ${
                        index % 2 === 0 ? "#00E5FF" : "#C084FC"
                      }`,
                      fontSize: "12px",
                      fontWeight: 600,
                      textShadow: "0 1px 5px #000000",
                      boxShadow: `0 0 10px ${
                        index % 2 === 0
                          ? "rgba(0,229,255,0.15)"
                          : "rgba(192,132,252,0.15)"
                      }`,
                      cursor: "default",
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                      color: index % 2 === 0 ? "#00E5FF" : "#D8B4FE",
                      boxShadow: `0 0 18px ${
                        index % 2 === 0
                          ? "rgba(0,229,255,0.45)"
                          : "rgba(192,132,252,0.45)"
                      }`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer message */}
        <motion.div
          className="d-flex justify-content-center align-items-center gap-2 mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
