
import React from "react";
import { motion } from "motion/react";

const experiences = [
  {
    number: "01",
    role: "Full Stack Developer Intern",
    company: "Elevance Skills",
    location: "Dharmapuri, Remote",
    duration: "July 2026 - October 2026",
    color: "#00E5FF",
    icon: "fa-laptop-code",
    points: [
      "Developed responsive web applications using HTML, CSS, Bootstrap, JavaScript, React.js, Spring Boot, and MySQL.",
      "Built reusable UI components and implemented CRUD operations following the Controller–Service–Repository architecture.",
      "Collaborated with the development team using Git and GitHub, while testing, debugging, and optimizing application performance.",
    ],
  },
  {
    number: "02",
    role: "Front End Developer Intern",
    company: "Six Sigma Solutions",
    location: "Salem, On-site",
    duration: "September 2025 - January 2026",
    color: "#C084FC",
    icon: "fa-code",
    points: [
      "Built responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and Bootstrap, ensuring consistent layouts and smooth user experiences across desktops, tablets, and mobile devices.",
      "Developed reusable and maintainable UI components using React.js, following a clean component-based structure to improve code organization, scalability, and overall application usability.",
      "Integrated RESTful APIs with frontend applications and collaborated with backend developers to connect services and handle dynamic data.",
    ],
  },
  {
    number: "03",
    role: "Graduate Engineer Trainee",
    company: "Mobase Electronics",
    location: "Chennai, On-site",
    duration: "April 2025 - May 2025",
    color: "#38F8C1",
    icon: "fa-gears",
    points: [
      "Gained practical exposure to electronics manufacturing processes and day-to-day production operations, developing an understanding of assembly procedures, production workflows, and standard manufacturing practices.",
      "Assisted in monitoring production processes and quality control activities, ensuring products and operations followed defined manufacturing procedures, quality requirements, and established production standards.",
      "Collaborated with cross-functional teams to understand end-to-end manufacturing workflows, coordinate operational activities, and gain practical knowledge of workplace procedures and production management.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="Experience"
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "transparent",
        scrollMarginTop: "70px",
      }}
    >
      <div className="container">
        {/* Section heading */}
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
              Career Journey
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
            Where I've{" "}
            <span>
              grown
            </span>
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
            My professional journey, practical experience, and the skills
            I've developed along the way.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div
          className="position-relative"
          style={{
            borderLeft: "2px solid rgba(0,229,255,0.45)",
            marginLeft: "14px",
          }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.number}
              className="position-relative ps-4 ps-md-5 pb-4"
              style={{
                marginBottom:
                  index === experiences.length - 1 ? "0" : "18px",
              }}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline node */}
              <div
                className="position-absolute d-flex align-items-center justify-content-center"
                style={{
                  left: "-15px",
                  top: "4px",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#07101F",
                  border: `2px solid ${experience.color}`,
                  color: experience.color,
                  fontSize: "10px",
                  boxShadow: `0 0 14px ${experience.color}70`,
                  zIndex: 1,
                }}
              >
                <i className="fa-solid fa-circle" style={{ fontSize: "7px" }} />
              </div>

              {/* Experience content */}
              <motion.div
                className="p-3 p-md-4"
                style={{
                  background: "transparent",
                  border: `1px solid ${experience.color}90`,
                  borderTop: `2px solid ${experience.color}`,
                  borderRadius: "14px",
                  boxShadow: `0 0 18px ${experience.color}15`,
                  transition: "box-shadow 0.3s ease",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: `0 0 28px ${experience.color}35`,
                }}
              >
                <div className="row g-4">
                  {/* Role and company */}
                  <div className="col-12 col-lg-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: "46px",
                          height: "46px",
                          flexShrink: 0,
                          borderRadius: "11px",
                          border: `1px solid ${experience.color}`,
                          color: experience.color,
                          fontSize: "19px",
                          boxShadow: `0 0 15px ${experience.color}25`,
                        }}
                      >
                        <i className={`fa-solid ${experience.icon}`} />
                      </div>

                      <span
                        className="fw-bold"
                        style={{
                          color: experience.color,
                          fontSize: "12px",
                          letterSpacing: "2px",
                          textShadow: `0 0 10px ${experience.color}60`,
                        }}
                      >
                        EXPERIENCE / {experience.number}
                      </span>
                    </div>

                    <h4
                      className="fw-bold mb-3"
                      style={{
                        fontSize: "clamp(18px, 2vw, 22px)",
                        lineHeight: 1.5,
                        color: "#FFFFFF",
                        textShadow: "0 2px 8px #000000",
                      }}
                    >
                      {experience.role}
                    </h4>

                    <p
                      className="mb-2 fw-semibold"
                      style={{
                        color: experience.color,
                        fontSize: "15px",
                        textShadow: "0 1px 6px #000000",
                      }}
                    >
                      {experience.company}
                    </p>

                    <div
                      className="d-flex align-items-center gap-2 mb-2"
                      style={{
                        color: "#F1F5FF",
                        fontSize: "12px",
                        textShadow: "0 1px 5px #000000",
                      }}
                    >
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: experience.color }}
                      />
                      {experience.location}
                    </div>

                    <div
                      className="d-flex align-items-center gap-2 flex-wrap"
                      style={{
                        color: "#FFFFFF",
                        fontSize: "12px",
                        textShadow: "0 1px 5px #000000",
                      }}
                    >
                      <i
                        className="fa-regular fa-calendar"
                        style={{ color: experience.color }}
                      />
                      {experience.duration}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="col-12 col-lg-8">
                    <h6
                      className="fw-bold mb-3 text-uppercase"
                      style={{
                        color: experience.color,
                        fontSize: "11px",
                        letterSpacing: "2px",
                      }}
                    >
                      Key Responsibilities
                    </h6>

                    <ul
                      className="list-unstyled mb-0"
                      style={{ padding: 0 }}
                    >
                      {experience.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          className="d-flex align-items-start gap-3 mb-3"
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + pointIndex * 0.08,
                          }}
                        >
                          <i
                            className="fa-solid fa-chevron-right mt-1"
                            style={{
                              color: experience.color,
                              fontSize: "11px",
                              flexShrink: 0,
                              textShadow: `0 0 8px ${experience.color}`,
                            }}
                          />

                          <span
                            style={{
                              color: "#FFFFFF",
                              fontSize: "13px",
                              lineHeight: 1.9,
                              textShadow:
                                "0 1px 5px #000000, 0 0 2px #000000",
                            }}
                          >
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="d-flex align-items-center justify-content-center gap-2 mt-5"
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

export default Experience;
