import { motion } from "motion/react";

const experiences = [
  {
    number: "01",
    role: "Full Stack Developer Intern",
    company: "Elevance Skills",
    location: "Dharmapuri, Remote",
    duration: "July 2026 - Present",
    points: [
      "Developed responsive web applications using HTML, CSS, Bootstrap, JavaScript, React.js, Spring Boot, and MySQL.",
      "Designed and integrated RESTful APIs to enable seamless communication between frontend and backend applications.",
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
    points: [
      "Built responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap for different screen sizes.",
      "Developed reusable and user-friendly UI components using React.js with clean component structure.",
      "Integrated REST APIs and worked with backend teams to connect frontend features with services.",
      "Improved UI performance and ensured consistent functionality across different browsers.",
    ],
  },
  {
    number: "03",
    role: "Graduate Engineer Trainee",
    company: "Mobase Electronics",
    location: "Chennai, On-site",
    duration: "April 2025 - May 2025",
    points: [
      "Gained practical exposure to electronics manufacturing processes and production operations.",
      "Assisted with process monitoring, quality control, and adherence to manufacturing standards.",
      "Collaborated with cross-functional teams to understand manufacturing workflows and operational procedures.",
      "Developed knowledge of continuous improvement practices, workplace safety, and quality standards.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="Experience"
      className="py-5 min-vh-100 bg-black text-white d-flex align-items-center"
    >
      <div className="container py-5">
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
            Where I've <span className="text-success">grown.</span>
          </h2>
          <p className="text-secondary mb-0" style={{ fontSize: "15px" }}>
            My professional and hands-on development experience.
          </p>
        </motion.div>

        <div>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.number}
              className="row border-top border-secondary border-opacity-25 py-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="col-lg-1 mb-3 mb-lg-0">
                <span
                  className="text-success fw-semibold"
                  style={{ fontSize: "12px" }}
                >
                  {experience.number}
                </span>
              </div>

              <div className="col-lg-4 mb-3 mb-lg-0">
                <h4 className="fw-semibold mb-2" style={{ fontSize: "20px" }}>
                  {experience.role}
                </h4>

                <p className="mb-1">
                  <span className="text-success fw-semibold">
                    {experience.company}
                  </span>
                  <span className="text-secondary">
                    {" "}
                    | {experience.location}
                  </span>
                </p>
                <small className="text-secondary">{experience.duration}</small>
              </div>

              <div className="col-lg-7">
                <ul
                  className="ps-3 mb-0 text-secondary"
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  {experience.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
