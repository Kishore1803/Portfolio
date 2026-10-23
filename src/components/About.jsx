import { motion } from "motion/react";
import profileImage from "../assets/myprofile.png";

const cyan = "#00D9FF";
const purple = "#A78BFA";
const white = "#FFFFFF";
const muted = "#E2E8F0";

const techStack = [
  { name: "React", detail: "Frontend", icon: "⚛", color: cyan },
  { name: "Java", detail: "Backend", icon: "☕", color: purple },
  { name: "Spring Boot", detail: "REST APIs", icon: "⌘", color: cyan },
];

const highlights = [
  {
    number: "01",
    icon: "✦",
    title: "Frontend Development",
    description:
      "Creating responsive interfaces with React, JavaScript, Bootstrap, and modern UI practices.",
    color: cyan,
  },
  {
    number: "02",
    icon: "⌘",
    title: "Backend Development",
    description:
      "Building Java and Spring Boot applications with REST APIs and database integration.",
    color: purple,
  },
  {
    number: "03",
    icon: "◈",
    title: "Problem Solving",
    description:
      "Turning ideas into practical applications with a focus on usability, maintainability, and performance.",
    color: cyan,
  },
];

function About() {
  return (
    <section
      id="About"
      className="position-relative text-white overflow-hidden"
      style={{
        minHeight: "100vh",
        scrollMarginTop: "85px",
        background: "transparent",
      }}
    >
      {/* Transparent section: decorative glows only */}
      <motion.div
        className="position-absolute pe-none"
        style={{
          top: "12%",
          left: "-140px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(0, 217, 255, 0.12)",
          filter: "blur(100px)",
        }}
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="position-absolute pe-none"
        style={{
          bottom: "8%",
          right: "-120px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(167, 139, 250, 0.12)",
          filter: "blur(100px)",
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

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
              About Me
            </span>
          </div>

          <h2
            className="fw-bold mb-3"
            style={{
              color: white,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.15,
              letterSpacing: "-1.8px",
              textShadow: "0 3px 14px rgba(0, 0, 0, 0.95)",
            }}
          >
            More than just <span>code</span>
          </h2>

          <p
            className="mb-0"
            style={{
              color: white,
              fontSize: "15px",
              lineHeight: 1.9,
              maxWidth: 650,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.95)",
            }}
          >
            Passionate about building modern web experiences with creative
            interfaces and reliable backend technology.
          </p>
        </motion.div>

        <div className="row align-items-start g-4 g-lg-5">
          {/* Profile image */}
          <motion.div
            className="col-12 col-lg-4 text-center"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="position-relative mx-auto"
              style={{ width: "min(320px, 78vw)", aspectRatio: "0.88 / 1" }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              {/* Neon glow behind the image */}
              <div
                className="position-absolute rounded-4"
                style={{
                  inset: "-8px",
                  background: `linear-gradient(135deg, ${cyan}, transparent 45%, ${purple})`,
                  filter: "blur(22px)",
                  opacity: 0.55,
                }}
              />

              {/* Neon image frame */}
              <div
                className="position-relative h-100 rounded-4 p-1"
                style={{
                  background: `linear-gradient(145deg, ${cyan}, ${purple}, ${cyan})`,
                  boxShadow:
                    "0 0 25px rgba(0, 217, 255, 0.25), 0 0 45px rgba(167, 139, 250, 0.14)",
                }}
              >
                <div className="w-100 h-100 rounded-4 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Kishore K - Software Developer"
                    loading="lazy"
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              {/* Floating code badge */}
              <motion.div
                className="position-absolute d-flex align-items-center justify-content-center rounded-3 fw-bold"
                style={{
                  top: "12%",
                  right: "-14px",
                  width: 54,
                  height: 48,
                  color: "#04101C",
                  background: cyan,
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 0 24px rgba(0, 217, 255, 0.65)",
                  fontSize: 18,
                }}
                animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {"</>"}
              </motion.div>

              {/* Floating K badge */}
              <motion.div
                className="position-absolute d-flex align-items-center justify-content-center rounded-3 fw-bold"
                style={{
                  bottom: "12%",
                  left: "-14px",
                  width: 46,
                  height: 46,
                  color: white,
                  background: `linear-gradient(135deg, ${purple}, #7051DD)`,
                  boxShadow: "0 0 24px rgba(167, 139, 250, 0.6)",
                  fontSize: 20,
                }}
                animate={{ y: [0, 7, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                K
              </motion.div>
            </motion.div>

            <p
              className="mt-4 mb-0 fw-semibold"
              style={{
                color: white,
                fontSize: 14,
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.95)",
              }}
            >
              <span style={{ color: cyan }}>Building.</span>{" "}
              <span style={{ color: purple }}>Learning.</span> Improving.
            </p>
          </motion.div>

          {/* About content — fully transparent */}
          <motion.div
            className="col-12 col-lg-8"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <div className="w-100">
              <div
                className="d-flex align-items-center gap-2 mb-3"
                style={{
                  color: cyan,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textShadow: "0 0 12px rgba(0, 217, 255, 0.35)",
                }}
              >
                WHO I AM
              </div>

              <h3
                className="fw-bold mb-4"
                style={{
                  color: white,
                  fontSize: "clamp(27px, 3vw, 40px)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.8px",
                  textShadow: "0 3px 12px rgba(0, 0, 0, 0.95)",
                }}
              >
                I create modern web experiences that <span>matter</span>
              </h3>

              <p
                className="mb-3"
                style={{
                  color: muted,
                  fontSize: 15,
                  lineHeight: 1.95,
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.98)",
                }}
              >
                Hi, I'm <strong style={{ color: white }}>Kishore K</strong>, a
                Frontend Developer and Java Full Stack Developer. I enjoy
                building modern, responsive, and user-friendly web applications
                that combine clean design with reliable functionality.
              </p>

              <p
                className="mb-3"
                style={{
                  color: muted,
                  fontSize: 15,
                  lineHeight: 1.95,
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.98)",
                }}
              >
                I've worked on projects such as{" "}
                <strong
                  style={{
                    color: cyan,
                    textShadow: "0 0 10px rgba(0, 217, 255, 0.2)",
                  }}
                >
                  Make My Tour, DM Health & Wealth, and Elite Ice Creams
                </strong>
                , focusing on responsive interfaces, usability, and practical
                features.
              </p>

              <p
                className="mb-4"
                style={{
                  color: muted,
                  fontSize: 15,
                  lineHeight: 1.95,
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.98)",
                }}
              >
                I believe good software should be simple, reliable, and easy to
                use. I'm continuously strengthening my skills and exploring
                better ways to build maintainable applications.
              </p>

              {/* Technology cards: transparent backgrounds */}
              <div className="row g-3 mb-4">
                {techStack.map((tech, index) => (
                  <div className="col-4" key={tech.name}>
                    <motion.div
                      className="h-100 rounded-4 p-3"
                      style={{
                        background: "transparent",
                        border: `1px solid ${tech.color}90`,
                        boxShadow: `0 0 15px ${tech.color}12`,
                      }}
                      whileHover={{
                        y: -5,
                        borderColor: tech.color,
                        boxShadow: `0 0 24px ${tech.color}32`,
                      }}
                      transition={{ duration: 0.22 }}
                    >
                      <div
                        className="mb-2"
                        style={{
                          color: tech.color,
                          fontSize: 23,
                          textShadow: `0 0 15px ${tech.color}75`,
                        }}
                      >
                        {tech.icon}
                      </div>

                      <div
                        className="fw-bold mb-1"
                        style={{
                          color: white,
                          fontSize: "clamp(11px, 1.5vw, 16px)",
                          overflowWrap: "anywhere",
                          textShadow: "0 2px 7px rgba(0, 0, 0, 0.95)",
                        }}
                      >
                        {tech.name}
                      </div>

                      <small
                        style={{
                          color: muted,
                          fontSize: 11,
                          textShadow: "0 1px 5px rgba(0, 0, 0, 0.95)",
                        }}
                      >
                        {tech.detail}
                      </small>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Strength cards: transparent backgrounds */}
              <div className="row g-3">
                {highlights.map((item, index) => (
                  <div className="col-12 col-md-4" key={item.number}>
                    <motion.div
                      className="h-100 rounded-4 p-3"
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(0, 217, 255, 0.38)",
                        borderTop: `2px solid ${item.color}`,
                      }}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.12 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        y: -5,
                        borderColor: item.color,
                        boxShadow: `0 0 22px ${item.color}24`,
                      }}
                    >
                      <div className="d-flex justify-content-between mb-3">
                        <span
                          style={{
                            color: item.color,
                            fontSize: 22,
                            textShadow: `0 0 15px ${item.color}75`,
                          }}
                        >
                          {item.icon}
                        </span>

                        <span
                          className="fw-bold"
                          style={{
                            color: item.color,
                            fontSize: 12,
                          }}
                        >
                          {item.number}
                        </span>
                      </div>

                      <h4
                        className="fw-bold mb-2"
                        style={{
                          color: white,
                          fontSize: 14,
                          lineHeight: 1.5,
                          textShadow: "0 2px 7px rgba(0, 0, 0, 0.95)",
                        }}
                      >
                        {item.title}
                      </h4>

                      <p
                        className="mb-0"
                        style={{
                          color: muted,
                          fontSize: 12,
                          lineHeight: 1.85,
                          textShadow: "0 2px 7px rgba(0, 0, 0, 0.95)",
                        }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
