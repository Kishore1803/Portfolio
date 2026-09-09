import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Communication in Black Spot using LoRa Technology",
    category: "Academic Project",
    image: "/Projects/spots.jpg",
    points: [
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
    points: [
      "Built responsive websites for health and financial services.",
      "Designed modern layouts with easy navigation.",
      "Developed frontend features using React and Firebase.",
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
    points: [
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
    points: [
      "Developed a responsive website for an ice cream business.",
      "Created an attractive product interface with easy navigation.",
      "Implemented responsive UI using modern frontend technologies.",
    ],
    technologies: [
      "HTML",
      "CSS",
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
    points: [
      "Built a platform for downloading high-quality illustrations.",
      "Created a clean and user-friendly interface.",
      "Implemented responsive UI using React.js.",
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
    points: [
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
      className="py-4 bg-black text-white d-flex align-items-center"
      style={{ minHeight: "100vh" }}
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
            Things I've <span className="text-success">built.</span>
          </h2>
          <p className="text-secondary mb-0" style={{ fontSize: "15px" }}>
            A selection of my academic and real-world development work.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <motion.div
                className="h-100 border border-secondary border-opacity-25 rounded-4 overflow-hidden bg-dark bg-opacity-25"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100"
                    loading="lazy"
                    style={{ objectFit: "fill" }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <small
                      className="text-success fw-semibold"
                      style={{ fontSize: "10px" }}
                    >
                      {project.number}
                    </small>

                    <small
                      className="text-secondary text-uppercase"
                      style={{ fontSize: "9px", letterSpacing: "1px" }}
                    >
                      {project.category}
                    </small>
                  </div>

                  <h5
                    className="fw-semibold mb-3"
                    style={{ fontSize: "18px", lineHeight: "1.4" }}
                  >
                    {project.title}
                  </h5>

                  <p
                    className="text-secondary mb-3"
                    style={{ fontSize: "12px", lineHeight: "1.7" }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-secondary"
                        style={{ fontSize: "10px" }}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.live || project.github) && (
                    <div className="d-flex gap-2 mt-auto">
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success btn-sm rounded-pill px-3"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          Live Demo
                          <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                        </motion.a>
                      )}

                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-light btn-sm rounded-pill px-3"
                          whileHover={{ scale: 1.04, color: "#198754" }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <i className="fa-brands fa-github me-2"></i>
                          GitHub
                        </motion.a>
                      )}
                    </div>
                  )}

                  {/* No links */}
                  {!project.live && !project.github && (
                    <span
                      className="text-success"
                      style={{ fontSize: "10px", letterSpacing: "0.5px" }}
                    >
                      Academic Project
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
