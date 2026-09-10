import React from "react";
import { motion } from "motion/react";

const education = [
  {
    number: "01",
    title: "B.E. - ECE",
    fullTitle: "Electronics & Communication Engineering",
    institution: "Dhirajlal Gandhi College of Technology",
    duration: "2021 - 2025",
    result: "CGPA: 8.10",
  },
  {
    number: "02",
    title: "B.E. Minor Degree",
    fullTitle: "Business Analytics",
    institution: "Dhirajlal Gandhi College of Technology",
    duration: "2023 - 2025",
    result: "CGPA: 8.16",
  },
  {
    number: "03",
    title: "Higher Secondary",
    fullTitle: "HSC / 12th",
    institution: "SRV Matric Hr Sec School",
    duration: "2020 - 2021",
    result: "Percentage: 85.6%",
  },
  {
    number: "04",
    title: "Secondary School",
    fullTitle: "SSLC / 10th",
    institution: "SRV Matric Hr Sec School",
    duration: "2018 - 2019",
    result: "Percentage: 77.8%",
  },
];

function Education() {
  return (
    <section
      id="Education"
      className="py-5 min-vh-100 bg-black text-white d-flex align-items-center"
    >
      <div className="container py-5">
        {/* Section Header */}
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
            My academic <span className="text-success">journey.</span>
          </h2>
          <p className="text-secondary mb-0" style={{ fontSize: "15px" }}>
            My academic background and educational achievements.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="row g-4">
          {education.map((item, index) => (
            <motion.div
              key={item.number}
              className="col-12 col-md-6"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <motion.div
                className="h-100 border border-secondary border-opacity-25 rounded-4 p-4 bg-dark bg-opacity-25"
                whileHover={{ y: -5, borderColor: "#198754" }}
                transition={{ duration: 0.25 }}
              >
                {/* Top */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span
                    className="text-success fw-semibold"
                    style={{ fontSize: "11px" }}
                  >
                    {item.number}
                  </span>

                  <span
                    className="text-secondary text-uppercase"
                    style={{ fontSize: "9px", letterSpacing: "1.5px" }}
                  >
                    Education
                  </span>
                </div>

                {/* Title */}
                <h4
                  className="fw-semibold mb-2"
                  style={{ fontSize: "21px", lineHeight: "1.4" }}
                >
                  {item.title}
                </h4>

                <p
                  className="text-success mb-3"
                  style={{ fontSize: "13px", fontWeight: "500" }}
                >
                  {item.fullTitle}
                </p>

                {/* Institution */}
                <p className="text-light mb-2" style={{ fontSize: "14px" }}>
                  {item.institution}
                </p>

                {/* Duration */}
                <p className="text-secondary mb-4" style={{ fontSize: "12px" }}>
                  {item.duration}
                </p>

                {/* Result */}
                <div className="border-top border-secondary border-opacity-25 pt-3">
                  <span className="text-secondary" style={{ fontSize: "12px" }}>
                    Result
                  </span>

                  <div className="d-flex align-items-center gap-3 mt-1">
                    <strong className="text-white" style={{ fontSize: "17px" }}>
                      {item.result}
                    </strong>
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

export default Education;
