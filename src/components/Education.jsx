import { motion } from "motion/react";

const education = [
  {
    number: "01",
    title: "B.E ECE",
    fullTitle: "Electronics & Communication Engineering",
    institution: "Dhirajlal Gandhi College of Technology",
    duration: "October 2021 - June 2025",
    result: "CGPA: 8.07",
    description:
      "Completed a Bachelor of Engineering in Electronics & Communication Engineering, developing technical knowledge in electronics, communication systems, and engineering fundamentals.",
  },
  {
    number: "02",
    title: "B.E Minor Degree",
    fullTitle: "Business Analytics",
    institution: "Dhirajlal Gandhi College of Technology",
    duration: "June 2023 - June 2025",
    result: "CGPA: 8.16",
    description:
      "Pursued a minor degree in Business Analytics, gaining academic exposure to business data, analytical thinking, and data-driven decision-making.",
  },
  {
    number: "03",
    title: "Higher Secondary",
    fullTitle: "HSC / 12th",
    institution: "SRV Matric Hr Sec School",
    duration: "June 2020 - April 2021",
    result: "Percentage: 85.6%",
    description:
      "Completed Higher Secondary education with a strong academic foundation and developed essential knowledge across school subjects.",
  },
  {
    number: "04",
    title: "Secondary School",
    fullTitle: "SSLC / 10th",
    institution: "SRV Matric Hr Sec School",
    duration: "June 2018 - April 2019",
    result: "Percentage: 77.8%",
    description:
      "Completed Secondary School education, building foundational knowledge and essential learning skills for further studies.",
  },
];

const headingGradient = {
  background: "linear-gradient(90deg, #00E5FF, #A78BFA, #FF75D8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

function Education() {
  return (
    <section
      id="Education"
      className="container-fluid py-5 text-white d-flex align-items-center"
    >
      <div className="container py-5">
        {/* Section Header */}
        <motion.div
          className="mt-5 mb-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "4px",
            }}
          >
            MY QUALIFICATIONS
          </p>

          <h2
            className="fw-bold mt-2 mb-3"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              letterSpacing: "-1.5px",
            }}
          >
            My Academic <span>Journey</span>
          </h2>

          <p
            className="mb-0"
            style={{
              maxWidth: "650px",
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            My educational background highlights my academic achievements,
            engineering education, and business analytics knowledge.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="row g-4">
          {education.map((item, index) => (
            <motion.div
              key={item.number}
              className="col-12 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <motion.div
                className="h-100 p-4"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "18px",
                }}
              >
                {/* Number and label */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span
                    style={{
                      ...headingGradient,
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {item.number}
                  </span>

                  <span
                    style={{
                      ...headingGradient,
                      fontSize: "10px",
                      letterSpacing: "2px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      border: "1px solid rgba(192,132,252,0.5)",
                      borderRadius: "20px",
                      padding: "6px 10px",
                    }}
                  >
                    Education
                  </span>
                </div>

                {/* Degree Heading */}
                <h3
                  className="fw-bold mb-2"
                  style={{
                    ...headingGradient,
                    fontSize: "clamp(20px, 3vw, 24px)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>

                <h4
                  className="mb-3"
                  style={{
                    ...headingGradient,
                    fontSize: "14px",
                    lineHeight: 1.7,
                    fontWeight: 600,
                  }}
                >
                  {item.fullTitle}
                </h4>

                {/* Institution */}
                <p
                  className="mb-2"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    fontWeight: 500,
                  }}
                >
                  {item.institution}
                </p>

                {/* Duration */}
                <p
                  className="mb-3"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "12px",
                    lineHeight: 1.7,
                  }}
                >
                  Duration: {item.duration}
                </p>

                {/* Description - White only */}
                <p
                  className="mb-4"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "13px",
                    lineHeight: 1.9,
                  }}
                >
                  {item.description}
                </p>

                {/* Result */}
                <div
                  className="pt-3 mt-auto"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <p
                    className="mb-2"
                    style={{
                      ...headingGradient,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Academic Result
                  </p>

                  <strong
                    style={{
                      color: "#FFFFFF",
                      fontSize: "18px",
                    }}
                  >
                    {item.result}
                  </strong>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
