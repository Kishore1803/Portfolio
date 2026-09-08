import React from "react";
import { motion } from "motion/react";
import profileImage from "../assets/myprofile.png";

function About() {
  return (
    <section
      id="About"
      className="py-5 min-vh-100 bg-black text-white d-flex align-items-center"
    >
      <div className="container py-5">
        {/* HEADER */}
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="fw-bold mt-2 mb-0"
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              letterSpacing: "-2px",
            }}
          >
            More than just <span className="text-success">code.</span>
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="row align-items-center g-4">
          {/* IMAGE */}
          <motion.div
            className="col-lg-4 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={profileImage}
              alt="Kishore K"
              loading="lazy"
              className="img-fluid rounded-4"
              style={{ width: "280px", maxWidth: "100%" }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <small
              className="text-success text-uppercase fw-semibold"
              style={{ fontSize: "10px", letterSpacing: "1.5px" }}
            >
              Who I am
            </small>

            <h3
              className="fw-bold mt-2 mb-3"
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                letterSpacing: "-1px",
              }}
            >
              I create modern web
              <br />
              experiences that <span className="text-success">matter.</span>
            </h3>

            <p
              className="text-secondary mb-3"
              style={{ fontSize: "15px", lineHeight: "1.7", maxWidth: "850px" }}
            >
              Hi, I'm <span className="text-white fw-semibold">Kishore K</span>,
              a passionate Frontend Developer and Java Full Stack Developer. I
              enjoy building modern, responsive and user-friendly web
              applications that combine clean design with reliable
              functionality.
            </p>

            <p
              className="text-secondary mb-3"
              style={{ fontSize: "15px", lineHeight: "1.7", maxWidth: "850px" }}
            >
              I have worked on projects such as{" "}
              <span className="text-white">
                MakeMyTour, DM Health and Wealth ,Elite Icecreams
              </span>{" "}
              and focusing on responsive interfaces, usability and practical
              functionality.
            </p>

            <p
              className="text-secondary mb-4"
              style={{ fontSize: "15px", lineHeight: "1.7", maxWidth: "850px" }}
            >
              I believe good software should be simple, reliable and easy to
              use. I continuously learn new technologies and look forward to
              growing as a developer.
            </p>

            {/* HIGHLIGHTS */}
            <div className="border-top border-secondary border-opacity-25 pt-3">
              <div className="row g-3">
                <div className="col-4">
                  <div className="text-success fw-bold">React</div>
                  <small className="text-secondary">Frontend</small>
                </div>

                <div className="col-4">
                  <div className="text-success fw-bold">Java</div>
                  <small className="text-secondary">Backend</small>
                </div>

                <div className="col-4">
                  <div className="text-success fw-bold">Spring Boot</div>
                  <small className="text-secondary">REST APIs</small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
