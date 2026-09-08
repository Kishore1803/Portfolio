import React from "react";
import { motion } from "motion/react";

const certifications = [
  {
    number: "01",
    title: "Web Designing",
    organization: "Besant Technologies",
    location: "Chennai",
    technologies: "HTML, CSS, JavaScript, Bootstrap",
    issued: "December 2025",
    image: "/Certificates/web-designing.jpg",
  },
  {
    number: "02",
    title: "React JS",
    organization: "Besant Technologies",
    location: "Chennai",
    technologies:
      "React.js, Components, Props, State, Hooks, React Router, API Integration, JavaScript (ES6+)",
    issued: "January 2026",
    image: "/Certificates/react-js.jpg",
  },
  {
    number: "03",
    title: "Java",
    organization: "Besant Technologies",
    location: "Chennai",
    technologies: "Java, OOP, Core Java, Java 8+, Servlets, JDBC, JSP",
    issued: "March 2026",
    image: "/Certificates/java.png",
  },
  {
    number: "04",
    title: "SQL",
    organization: "Besant Technologies",
    location: "Chennai",
    technologies:
      "SQL, RDBMS, Joins, Subqueries, Views, Indexes, Query Optimization",
    issued: "April 2026",
    image: "/Certificates/sql.png",
  },
  {
    number: "05",
    title: "Artificial Intelligence",
    organization: "Novitech",
    location: "Coimbatore",
    technologies: "AI Basics, ML Concepts",
    issued: "July 2025",
    image: "/Certificates/artificial-intelligence.jpg",
  },
  {
    number: "06",
    title: "IoT using Arduino",
    organization: "Dhirajlal Gandhi College of Technology",
    location: "Salem",
    technologies: "Arduino, Sensors, IoT",
    issued: "February 2023",
    image: "/Certificates/iot-arduino.jpg",
  },
  {
    number: "07",
    title: "Problem Solving Through Programming",
    organization: "Dhirajlal Gandhi College of Technology",
    location: "Salem",
    technologies: "C Programming, Logic Building",
    issued: "February 2024",
    image: "/Certificates/problem-solving.jpg",
  },
  {
    number: "08",
    title: "Neuro Forge",
    organization: "National Institute of Technology",
    location: "Trichy",
    technologies: "AI, Neural Networks",
    issued: "February 2024",
    image: "/Certificates/neuro-forge.jpg",
  },
];

function Certifications() {
  return (
    <section
      id="Certifications"
      className="py-5 min-vh-100 bg-black text-white d-flex align-items-center"
    >
      <div className="container py-5">
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="fw-bold mt-2 mb-2"
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              letterSpacing: "-2px",
            }}
          >
            Proof of <span className="text-success">learning.</span>
          </h2>

          <p
            className="text-secondary mb-0"
            style={{ fontSize: "15px", maxWidth: "600px" }}
          >
            Courses, workshops, and technical certifications that support my
            continuous learning journey.
          </p>
        </motion.div>

        <div className="row g-4">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.number}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="h-100 border border-secondary border-opacity-25 rounded-4 bg-dark bg-opacity-25"
                whileHover={{ y: -7, borderColor: "rgba(25, 135, 84, 0.6)" }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: "310px" }}
              >
                <div className="p-4 h-100 d-flex flex-column">
                  {/* Number + Type */}

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span
                      className="text-success fw-semibold"
                      style={{ fontSize: "12px", letterSpacing: "1px" }}
                    >
                      {certificate.number}
                    </span>

                    <span
                      className="text-secondary text-uppercase"
                      style={{ fontSize: "9px", letterSpacing: "1.5px" }}
                    >
                      Certificate
                    </span>
                  </div>

                  {/* Title */}

                  <h4
                    className="fw-semibold mb-3"
                    style={{ fontSize: "20px", lineHeight: "1.35" }}
                  >
                    {certificate.title}
                  </h4>
                  {/* Organization */}
                  <p className="text-success mb-1" style={{ fontSize: "13px" }}>
                    {certificate.organization}
                  </p>

                  {/* Location */}

                  <p
                    className="text-secondary mb-3"
                    style={{ fontSize: "12px" }}
                  >
                    <i className="fa-solid fa-location-dot me-2"></i>
                    {certificate.location}
                  </p>

                  {/* Technologies */}

                  <div className="mb-4">
                    <small
                      className="text-secondary d-block mb-2"
                      style={{
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Covered
                    </small>

                    <p
                      className="text-light mb-0"
                      style={{
                        fontSize: "12px",
                        lineHeight: "1.7",
                        opacity: 0.75,
                      }}
                    >
                      {certificate.technologies}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Issued */}

                      <div>
                        <small
                          className="text-secondary d-block"
                          style={{
                            fontSize: "9px",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          Issued
                        </small>

                        <small
                          className="text-light"
                          style={{ fontSize: "11px" }}
                        >
                          {certificate.issued}
                        </small>
                      </div>

                      {/* View Certificate */}

                      <motion.a
                        href={certificate.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success text-decoration-none d-flex align-items-center gap-2"
                        style={{ fontSize: "11px", fontWeight: "600" }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.25 }}
                      >
                        View Certificate
                        <i
                          className="fa-solid fa-arrow-up-right-from-square"
                          style={{ fontSize: "9px" }}
                        ></i>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
