import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import profileImage from "../assets/myprofile.png";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "React Developer",
  "Java Developer",
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kishore-k-25b131288",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    name: "GitHub",
    url: "https://github.com/Kishore1803",
    icon: "fa-brands fa-github",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/919600825271",
    icon: "fa-brands fa-whatsapp",
  },
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      className="min-vh-100 bg-black text-white d-flex align-items-center"
    >
      <div className="container py-5">
        <div className="row align-items-center gy-5">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Small Label */}
            <motion.p
              className="text-success fw-semibold mb-3"
              style={{ fontSize: "12px", letterSpacing: "2px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              FULL STACK DEVELOPER
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(48px, 6vw, 78px)",
                lineHeight: "1.02",
                letterSpacing: "-3px",
              }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Hi, I'm <span className="text-success">Kishore K</span>
            </motion.h1>

            {/* Dynamic Role */}
            <motion.div className="mb-3" style={{ minHeight: "38px" }}>
              <motion.h3
                key={roles[roleIndex]}
                className="text-light fw-semibold mb-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: "clamp(22px, 3vw, 30px)" }}
              >
                {roles[roleIndex]}
              </motion.h3>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-secondary fs-5 mb-4"
              style={{ maxWidth: "600px", lineHeight: "1.7" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I build responsive and user-friendly web applications using modern
              frontend and backend technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="d-flex flex-wrap gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#Projects"
                className="btn btn-success rounded-pill px-4 py-3 fw-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </motion.a>

              <motion.a
                href="#Contact"
                className="btn btn-outline-light rounded-pill px-4 py-3 fw-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>

              <motion.a
                href="/Downloads/Kishore_K_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success rounded-pill px-4 py-3 fw-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
                <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="d-flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary fs-5"
                  aria-label={social.name}
                  whileHover={{ color: "#198754", y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            className="col-lg-5 text-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="position-relative d-inline-block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={profileImage}
                alt="Kishore K"
                className="img-fluid rounded-circle"
                loading="eager"
                fetchPriority="high"
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}
        <motion.div
          className="row mt-5 pt-4 border-top border-secondary border-opacity-25"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Stat 1 */}
          <div className="col-6 col-md-3 mb-3 mb-md-0">
            <h4 className="fw-bold mb-1">6 Months</h4>
            <small className="text-secondary">Experience</small>
          </div>

          {/* Stat 2 */}
          <div className="col-6 col-md-3 mb-3 mb-md-0">
            <h4 className="fw-bold mb-1">5+</h4>
            <small className="text-secondary">Projects</small>
          </div>

          {/* Stat 3 */}
          <div className="col-6 col-md-3">
            <h4 className="fw-bold mb-1">React</h4>
            <small className="text-secondary">Frontend</small>
          </div>

          {/* Stat 4 */}
          <div className="col-6 col-md-3">
            <h4 className="fw-bold mb-1">Java</h4>
            <small className="text-secondary">Full Stack</small>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
