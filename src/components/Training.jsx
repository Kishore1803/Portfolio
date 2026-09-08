import React from "react";
import { motion } from "motion/react";

const training = {
  number: "01",
  title: "Java Full Stack Developer Training",
  company: "Besant Technologies",
  location: "Chennai",
  duration: "Oct 2025 - Sep 2026",
  description:
    "Hands-on training focused on developing modern web applications using frontend, backend, database, and development tools.",
  technologies: [
    "Core Java",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Spring Boot",
    "REST APIs",
    "MySQL",
    "Git & GitHub",
  ],
};

function Training() {
  return (
    <section
      id="Training"
      className="py-5 min-vh-100 bg-black text-white d-flex align-items-center"
    >
      <div className="container py-5">
        {/* Header */}
        <motion.div
          className="mb-5"
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
            Learning to <span className="text-success">build.</span>
          </h2>
          <p className="text-secondary mb-0" style={{ fontSize: "15px" }}>
            Practical training and hands-on development experience.
          </p>
        </motion.div>

        {/* Training Content */}
        <motion.div
          className="border-top border-secondary border-opacity-25 py-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="row g-4">
            {/* Number */}
            <div className="col-lg-1">
              <span
                className="text-success fw-semibold"
                style={{ fontSize: "12px" }}
              >
                {training.number}
              </span>
            </div>

            {/* Main Details */}
            <div className="col-lg-5">
              <h3 className="fw-semibold mb-2" style={{ fontSize: "24px" }}>
                {training.title}
              </h3>

              <p className="mb-1">
                <span className="text-success fw-semibold">
                  {training.company}
                </span>
                <span className="text-secondary"> | {training.location}</span>
              </p>
              <small className="text-secondary">{training.duration}</small>

              <p
                className="text-secondary mt-4 mb-0"
                style={{ fontSize: "14px", lineHeight: "1.8", maxWidth: "500px"}}
              >
                {training.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="col-lg-6">
              <small
                className="text-success fw-semibold text-uppercase"
                style={{ fontSize: "10px", letterSpacing: "1.5px" }}
              >
                Technologies Covered
              </small>

              <div className="d-flex flex-wrap gap-2 mt-3">
                {training.technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    className="border border-secondary border-opacity-50 rounded-pill px-3 py-2 text-secondary"
                    style={{ fontSize: "12px" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ color: "#198754", borderColor: "#198754", y: -2 }}
                  >
                    {technology}
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

export default Training;
