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
    title: "Neuro Forge",
    organization: "National Institute of Technology",
    location: "Trichy",
    technologies: "AI, Neural Networks",
    issued: "February 2024",
    image: "/Certificates/neuro-forge.jpg",
  },
];

const headingGradient = {
  background: "linear-gradient(90deg, #00E5FF, #A78BFA, #FF75D8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

function Certifications() {
  return (
    <section
      id="Certifications"
      className="container-fluid py-5 text-white d-flex align-items-center"
    >
      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="mt-5 mb-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="mb-2 fw-semibold"
            style={{
              color: "#00E5FF",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            My Achievements
          </p>

          <h2
            className="fw-bold mt-2 mb-3"
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              letterSpacing: "-2px",
            }}
          >
            Proof of <span>learning</span>
          </h2>

          <p
            className="mb-0"
            style={{
              color: "#FFFFFF",
              fontSize: "15px",
              lineHeight: "1.8",
              maxWidth: "600px",
            }}
          >
            Courses, workshops, and technical certifications that support my
            continuous learning journey.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="row g-4">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.number}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="h-100 rounded-4"
                whileHover={{
                  y: -7,
                  borderColor: "rgba(0, 229, 255, 0.65)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  minHeight: "310px",
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 0 0 rgba(0, 229, 255, 0)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <div className="p-4 h-100 d-flex flex-column">
                  {/* Number and Label */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span
                      className="fw-semibold"
                      style={{
                        ...headingGradient,
                        fontSize: "13px",
                        letterSpacing: "1.5px",
                      }}
                    >
                      {certificate.number}
                    </span>

                    <span
                      style={{
                        color: "#FFFFFF",
                        fontSize: "10px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      Certificate
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h4
                    className="fw-semibold mb-3"
                    style={{
                      ...headingGradient,
                      fontSize: "21px",
                      lineHeight: "1.4",
                    }}
                  >
                    {certificate.title}
                  </h4>

                  {/* Organization */}
                  <p
                    className="mb-2"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {certificate.organization}
                  </p>

                  {/* Location */}
                  <p
                    className="mb-4"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "12px",
                    }}
                  >
                    <i className="fa-solid fa-location-dot me-2" />
                    {certificate.location}
                  </p>

                  {/* Technologies Covered */}
                  <div className="mb-4">
                    <p
                      className="mb-2 fw-semibold"
                      style={{
                        ...headingGradient,
                        fontSize: "10px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      Technologies Covered
                    </p>

                    <p
                      className="mb-0"
                      style={{
                        color: "#FFFFFF",
                        fontSize: "12px",
                        lineHeight: "1.8",
                      }}
                    >
                      {certificate.technologies}
                    </p>
                  </div>

                  {/* Issued Date and Certificate Link */}
                  <div
                    className="mt-auto pt-3 border-top"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center gap-2">
                      <div>
                        <p
                          className="mb-1 fw-semibold"
                          style={{
                            ...headingGradient,
                            fontSize: "10px",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                          }}
                        >
                          Issued
                        </p>

                        <p
                          className="mb-0"
                          style={{
                            color: "#FFFFFF",
                            fontSize: "11px",
                          }}
                        >
                          {certificate.issued}
                        </p>
                      </div>

                      <motion.a
                        href={certificate.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none d-flex align-items-center gap-2"
                        style={{
                          ...headingGradient,
                          fontSize: "11px",
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                        }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.25 }}
                      >
                        View Certificate
                        <i
                          className="fa-solid fa-arrow-up-right-from-square"
                          style={{ fontSize: "9px" }}
                        />
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
