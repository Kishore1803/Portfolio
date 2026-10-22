import React from "react";
import { motion } from "motion/react";

const trainingData = [
  {
    number: "01",
    title: "Java Full Stack Developer Training",
    company: "Besant Technologies",
    location: "Chennai, Remote",
    duration: "October 2025 - September 2026",
    color: "#00E5FF",
    icon: "fa-graduation-cap",

    description: [
      "Hands-on training focused on developing modern web applications using frontend, backend, database, and development tools.",
      "Built a strong foundation in Core Java — OOP, Collections, Exception Handling, Multithreading, Lambda Expressions, and Streams.",
      "Developed responsive, user-friendly web applications using HTML5, CSS3, Bootstrap, JavaScript (ES6+), and React, following modern web development practices.",
      "Worked with MySQL for database design and CRUD operations, and gained experience with JDBC, Servlets, JSP, and Spring Boot.",
    ],

    technologies: [
      "Core Java",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Git & GitHub",
    ],
  },
];

function Training() {
  return (
    <section
      id="Training"
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
              Learning Journey
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
            Learning to <span>build</span>
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
            Practical training, technical knowledge, and hands-on experience
            building modern web applications.
          </p>
        </motion.div>

        {/* Training details */}
        {trainingData.map((training, index) => (
          <motion.article
            key={`${training.company}-${training.title}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="p-3 p-md-4 p-lg-5"
              style={{
                background: "transparent",
                border: `1px solid ${training.color}90`,
                borderTop: `3px solid ${training.color}`,
                borderRadius: "16px",
                boxShadow: `0 0 22px ${training.color}18`,
                transition: "box-shadow 0.3s ease",
              }}
              whileHover={{
                boxShadow: `0 0 32px ${training.color}35`,
              }}
            >
              {/* Training title and metadata */}
              <div className="d-flex flex-column flex-md-row align-items-md-start justify-content-between gap-4 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "54px",
                      height: "54px",
                      flexShrink: 0,
                      borderRadius: "13px",
                      border: `1px solid ${training.color}`,
                      color: training.color,
                      fontSize: "23px",
                      boxShadow: `0 0 18px ${training.color}30`,
                    }}
                  >
                    <i className={`fa-solid ${training.icon}`} />
                  </div>

                  <div>
                    <span
                      className="fw-bold d-block mb-2"
                      style={{
                        color: training.color,
                        fontSize: "11px",
                        letterSpacing: "2px",
                        textShadow: `0 0 10px ${training.color}55`,
                      }}
                    >
                      TRAINING / {training.number}
                    </span>

                    <h3
                      className="fw-bold mb-2"
                      style={{
                        fontSize: "clamp(21px, 2.5vw, 30px)",
                        lineHeight: 1.4,
                        color: "#FFFFFF",
                        textShadow: "0 2px 8px #000000",
                      }}
                    >
                      {training.title}
                    </h3>

                    <p
                      className="mb-2 fw-semibold"
                      style={{
                        color: training.color,
                        fontSize: "15px",
                        textShadow: "0 1px 6px #000000",
                      }}
                    >
                      {training.company}
                    </p>

                    <div className="d-flex flex-wrap gap-3">
                      <span
                        className="d-flex align-items-center gap-2"
                        style={{
                          color: "#FFFFFF",
                          fontSize: "12px",
                          textShadow: "0 1px 5px #000000",
                        }}
                      >
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: training.color }}
                        />
                        {training.location}
                      </span>

                      <span
                        className="d-flex align-items-center gap-2"
                        style={{
                          color: "#FFFFFF",
                          fontSize: "12px",
                          textShadow: "0 1px 5px #000000",
                        }}
                      >
                        <i
                          className="fa-regular fa-calendar"
                          style={{ color: training.color }}
                        />
                        {training.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center gap-2 align-self-start rounded-pill px-3 py-2"
                  style={{
                    border: `1px solid ${training.color}90`,
                    color: training.color,
                    fontSize: "11px",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  <i className="fa-solid fa-laptop-code" />
                  Full Stack
                </div>
              </div>

              <div
                className="mb-4"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(0,229,255,0.8), rgba(192,132,252,0.4), transparent)",
                }}
              />

              <div className="row g-4">
                {/* Learning highlights */}
                <div className="col-12 col-lg-7">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{
                      color: "#00E5FF",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      textShadow: "0 0 10px rgba(0,229,255,0.3)",
                    }}
                  >
                    <i className="fa-solid fa-book-open me-2" />
                    What I Learned
                  </h6>

                  <ul className="list-unstyled mb-0">
                    {training.description.map((highlight, highlightIndex) => (
                      <motion.li
                        key={highlightIndex}
                        className="d-flex align-items-start gap-3 mb-3"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: highlightIndex * 0.1,
                        }}
                      >
                        <span
                          className="d-flex align-items-center justify-content-center mt-1"
                          style={{
                            width: "23px",
                            height: "23px",
                            flexShrink: 0,
                            borderRadius: "50%",
                            border: "1px solid #00E5FF",
                            color: "#00E5FF",
                            fontSize: "10px",
                            boxShadow: "0 0 10px rgba(0,229,255,0.2)",
                          }}
                        >
                          <i className="fa-solid fa-check" />
                        </span>

                        <span
                          style={{
                            color: "#FFFFFF",
                            fontSize: "13px",
                            lineHeight: 1.9,
                            textShadow: "0 1px 5px #000000, 0 0 2px #000000",
                          }}
                        >
                          {highlight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="col-12 col-lg-5">
                  <div
                    className="h-100 p-3 p-md-4"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(192,132,252,0.65)",
                      borderRadius: "12px",
                      boxShadow: "0 0 18px rgba(192,132,252,0.1)",
                    }}
                  >
                    <h6
                      className="fw-bold text-uppercase mb-2"
                      style={{
                        color: "#C084FC",
                        fontSize: "12px",
                        letterSpacing: "2px",
                        textShadow: "0 0 10px rgba(192,132,252,0.3)",
                      }}
                    >
                      <i className="fa-solid fa-microchip me-2" />
                      Technologies Covered
                    </h6>

                    <p
                      className="mb-4"
                      style={{
                        color: "#F1F5FF",
                        fontSize: "12px",
                        lineHeight: 1.8,
                        textShadow: "0 1px 5px #000000",
                      }}
                    >
                      Tools and technologies explored during my training.
                    </p>

                    <div className="d-flex flex-wrap gap-2">
                      {training.technologies.map(
                        (technology, technologyIndex) => (
                          <motion.span
                            key={technology}
                            className="rounded-pill px-3 py-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: technologyIndex * 0.05,
                            }}
                            whileHover={{
                              y: -3,
                              scale: 1.04,
                              boxShadow: "0 0 16px rgba(192,132,252,0.35)",
                            }}
                            style={{
                              border: "1px solid rgba(192,132,252,0.8)",
                              color: "#FFFFFF",
                              fontSize: "11px",
                              fontWeight: 600,
                              textShadow: "0 1px 5px #000000",
                              cursor: "default",
                            }}
                          >
                            {technology}
                          </motion.span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.article>
        ))}

        {/* Bottom message */}
        <motion.div
          className="d-flex align-items-center justify-content-center gap-2 mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>
    </section>
  );
}

export default Training;
