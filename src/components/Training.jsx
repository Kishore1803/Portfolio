import React from "react";
import { motion } from "motion/react";

const trainingData = [
  {
    number: "01",
    title: "Java Full Stack Developer Training",
    company: "Besant Technologies",
    location: "Chennai, Remote",
    duration: "October 2025 - September 2026",

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
      className="min-vh-100 bg-black text-white d-flex align-items-center py-5"
    >
      <div className="container py-5">
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="fw-bold mt-2 mb-2"
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              letterSpacing: "-2px",
            }}
          >
            Learning to <span className="text-success">build.</span>
          </h2>

          <p
            className="text-secondary mb-0"
            style={{ fontSize: "15px", maxWidth: "600px" }}
          >
            Practical training and hands-on development experience.
          </p>
        </motion.div>

        <div>
          {trainingData.map((training, index) => (
            <motion.article
              key={`${training.company}-${training.title}`}
              className="border-top border-secondary border-opacity-25 py-4"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="row g-4">
                <div className="col-12 col-lg-1">
                  <span
                    className="text-success fw-semibold"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "1px",
                    }}
                  >
                    {training.number}
                  </span>
                </div>

                <div className="col-12 col-lg-6">
                  <h3
                    className="fw-semibold mb-2"
                    style={{
                      fontSize: "clamp(21px, 2vw, 26px)",
                      lineHeight: "1.35",
                    }}
                  >
                    {training.title}
                  </h3>

                  <p className="mb-1" style={{ fontSize: "14px" }}>
                    <span className="text-success fw-semibold">
                      {training.company}
                    </span>
                    <span className="text-secondary">
                      {" "}
                      | {training.location}
                    </span>
                  </p>
                  <small className="text-secondary">{training.duration}</small>

                  <ul
                    className="ps-3 mb-0 mt-3"
                    style={{ textAlign: "justify" }}
                  >
                    {training.description.map((highlight, highlightIndex) => (
                      <motion.li
                        key={highlightIndex}
                        className="text-secondary mb-2"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: highlightIndex * 0.08,
                        }}
                        style={{ fontSize: "13px", lineHeight: "1.7" }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="col-12 col-lg-5">
                  <small
                    className="text-success fw-semibold text-uppercase"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Technologies Covered
                  </small>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {training.technologies.map(
                      (technology, technologyIndex) => (
                        <motion.span
                          key={technology}
                          className="border border-secondary border-opacity-50 rounded-pill px-3 py-2 text-secondary"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: technologyIndex * 0.04,
                          }}
                          whileHover={{
                            color: "#198754",
                            borderColor: "#198754",
                            y: -2,
                          }}
                          style={{ fontSize: "11px" }}
                        >
                          {technology}
                        </motion.span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Training;
