import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Communication in Black Spot using LoRa Technology",
    category: "Academic Project",
    image: "/Projects/spots.jpg",
    color: "#00E5FF",
    icon: "fa-tower-broadcast",
    description: [
      "Designed a communication system for network dead zones.",
      "Used LoRa technology for long-range communication.",
      "Integrated Arduino and GSM modules.",
    ],
    technologies: ["LoRa", "Arduino", "GSM"],
  },
  {
    number: "02",
    title: "DM Health & Wealth",
    category: "Web Application",
    image: "/Projects/dm.png",
    color: "#C084FC",
    icon: "fa-heart-pulse",
    description: [
      "Built responsive websites for health and financial services.",
      "Designed modern layouts with easy navigation.",
      "Developed responsive frontend features using React and Firebase.",
    ],
    technologies: ["HTML", "CSS", "React", "Bootstrap", "SQL", "Firebase"],
    live: "https://daily-money-bice.vercel.app/",
    github: "https://github.com/Kishore1803/DailyMoney",
  },
  {
    number: "03",
    title: "Make My Tour",
    category: "Travel Booking Platform",
    image: "/Projects/makemytour.png",
    color: "#38F8C1",
    icon: "fa-plane",
    description: [
      "Developed a travel booking platform for flights and hotels.",
      "Implemented dynamic pricing, price history, and price freeze.",
      "Built flight tracking features using full-stack technologies.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Spring Boot", "MySQL"],
    live: "https://make-my-trip-clone-springboot-frontend.onrender.com",
    github: "https://github.com/Kishore1803/make-my-trip-clone-springboot",
  },
  {
    number: "04",
    title: "Elite Ice Creams",
    category: "Web Application",
    image: "/Projects/icecream.png",
    color: "#FF75D8",
    icon: "fa-ice-cream",
    description: [
      "Developed a responsive website for an ice cream business.",
      "Created an attractive product interface.",
      "Built a responsive UI using modern frontend technologies.",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Spring Boot",
      "MySQL",
    ],
    live: "https://elite-ice-creams.vercel.app",
    github: "https://github.com/Kishore1803/Elite-Ice-Creams",
  },
  {
    number: "05",
    title: "Click Crafty",
    category: "Web Application",
    image: "/Projects/click.png",
    color: "#00E5FF",
    icon: "fa-images",
    description: [
      "Built a platform for downloading high-quality illustrations.",
      "Created a clean and user-friendly interface.",
      "Implemented responsive UI using React.js and modern technologies.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    live: "https://click-crafty.vercel.app/",
    github: "https://github.com/Kishore1803/Click-Crafty",
  },
  {
    number: "06",
    title: "Todo List Application",
    category: "Frontend Project",
    image: "/Projects/Todo.png",
    color: "#C084FC",
    icon: "fa-list-check",
    description: [
      "Created a simple task management application.",
      "Implemented add and delete task functionality.",
      "Updated the UI dynamically using JavaScript.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://github-todolist.netlify.app/",
    github: "https://github.com/Kishore1803/To-Do-List",
  },
];

function Projects() {
  return (
    <section
      id="Projects"
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
              My Portfolio
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
            Things I've <span>built</span>
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
            A collection of academic projects and web applications built with
            creativity, problem-solving, and modern technologies.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
            >
              <motion.article
                className="h-100 d-flex flex-column overflow-hidden"
                style={{
                  background: "transparent",
                  border: `1px solid ${project.color}85`,
                  borderTop: `3px solid ${project.color}`,
                  borderRadius: "15px",
                  boxShadow: `0 0 18px ${project.color}18`,
                  transition: "box-shadow 0.3s ease",
                }}
                whileHover={{
                  y: -7,
                  boxShadow: `0 0 30px ${project.color}40`,
                }}
              >
                {/* Project image */}
                <div
                  className="position-relative overflow-hidden"
                  style={{
                    height: "210px",
                    borderBottom: `1px solid ${project.color}70`,
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-100 h-100"
                    style={{ display: "block" }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.45 }}
                  />

                  {/* Image overlay label */}
                  <div
                    className="position-absolute top-0 start-0 m-3 d-flex align-items-center gap-2 rounded-pill px-3 py-2"
                    style={{
                      background: "rgba(3,8,23,0.88)",
                      border: `1px solid ${project.color}`,
                      color: project.color,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    <i className={`fa-solid ${project.icon}`} />
                    {project.category}
                  </div>

                  <div
                    className="position-absolute bottom-0 end-0 m-3 fw-bold"
                    style={{
                      color: project.color,
                      fontSize: "13px",
                      letterSpacing: "2px",
                      textShadow: "0 2px 8px #000000",
                    }}
                  >
                    / {project.number}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h5
                    className="fw-bold mb-3"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "20px",
                      lineHeight: 1.5,
                      textShadow: "0 2px 8px #000000",
                    }}
                  >
                    {project.title}
                  </h5>

                  {/* Description */}
                  <ul className="list-unstyled mb-4">
                    {project.description.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="d-flex align-items-start gap-2 mb-2"
                      >
                        <i
                          className="fa-solid fa-angle-right mt-1"
                          style={{
                            color: project.color,
                            fontSize: "12px",
                            flexShrink: 0,
                            textShadow: `0 0 8px ${project.color}`,
                          }}
                        />

                        <span
                          style={{
                            color: "#FFFFFF",
                            fontSize: "13px",
                            lineHeight: 1.8,
                            textShadow: "0 1px 5px #000000, 0 0 2px #000000",
                          }}
                        >
                          {point.trim()}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mb-4">
                    <small
                      className="fw-bold text-uppercase d-block mb-3"
                      style={{
                        color: project.color,
                        fontSize: "10px",
                        letterSpacing: "2px",
                      }}
                    >
                      Technologies
                    </small>

                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <motion.span
                          key={technology}
                          className="rounded-pill px-2 py-1"
                          style={{
                            color: "#FFFFFF",
                            border: `1px solid ${project.color}90`,
                            fontSize: "10px",
                            fontWeight: 500,
                            textShadow: "0 1px 4px #000000",
                          }}
                          whileHover={{
                            y: -2,
                            color: project.color,
                            boxShadow: `0 0 12px ${project.color}30`,
                          }}
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="d-flex flex-wrap gap-2 mt-auto pt-3">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm rounded-pill px-3 py-2"
                        style={{
                          color: "#06111E",
                          background: project.color,
                          border: `1px solid ${project.color}`,
                          fontSize: "11px",
                          fontWeight: 800,
                          boxShadow: `0 0 13px ${project.color}35`,
                        }}
                        whileHover={{
                          scale: 1.04,
                          boxShadow: `0 0 22px ${project.color}70`,
                        }}
                        whileTap={{ scale: 0.96 }}
                      >
                        Live Demo
                        <i className="fa-solid fa-arrow-up-right-from-square ms-2" />
                      </motion.a>
                    )}

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm rounded-pill px-3 py-2"
                        style={{
                          color: "#FFFFFF",
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.75)",
                          fontSize: "11px",
                          fontWeight: 700,
                        }}
                        whileHover={{
                          scale: 1.04,
                          color: project.color,
                          borderColor: project.color,
                          boxShadow: `0 0 15px ${project.color}25`,
                        }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <i className="fa-brands fa-github me-2" />
                        GitHub
                      </motion.a>
                    )}

                    {!project.live && !project.github && (
                      <span
                        className="d-flex align-items-center gap-2"
                        style={{
                          color: project.color,
                          fontSize: "11px",
                          fontWeight: 700,
                        }}
                      >
                        <i className="fa-solid fa-microchip" />
                        Academic Project
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>

        {/* Footer message */}
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

export default Projects;
