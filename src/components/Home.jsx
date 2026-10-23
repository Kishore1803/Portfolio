import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import profileImage from "../assets/myprofile.png";

const roles = [
  "Java Full Stack Developer",
  "React Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Developer",
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

const colors = {
  white: "#F1F5F9",
  muted: "#CBD5E1",
  cyan: "#00D9FF",
  purple: "#A78BFA",
};

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Automatically change developer role
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  // Smooth mouse movement for profile
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const imageX = useTransform(smoothX, [-500, 500], [-10, 10]);
  const imageY = useTransform(smoothY, [-500, 500], [-10, 10]);

  const handleMouseMove = (event) => {
    if (window.innerWidth <= 768) return;

    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - (rect.left + rect.width / 2));
    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="Home"
      className="position-relative d-flex align-items-center overflow-hidden text-white"
      style={{
        minHeight: "100vh",
        paddingTop: "105px",
        paddingBottom: "65px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
    >
      {/* Subtle glow accents - no background image or background color */}
      <div
        className="position-absolute pe-none"
        style={{
          top: "12%",
          right: "12%",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background: "rgba(0, 217, 255, 0.10)",
          filter: "blur(100px)",
        }}
      />

      <div
        className="position-absolute pe-none"
        style={{
          bottom: "8%",
          left: "20%",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.10)",
          filter: "blur(100px)",
        }}
      />

      <div className="container position-relative">
        <div className="row align-items-center gy-5">
          {/* LEFT CONTENT */}
          <motion.div
            className="col-lg-7 text-center text-lg-start"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Greeting */}
            <motion.p
              className="mb-2"
              style={{ fontSize: "clamp(18px, 2vw, 25px)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Hello, it's me
            </motion.p>

            {/* Name */}
            <motion.h1
              className="fw-bold mb-3"
              style={{
                color: colors.white,
                fontSize: "clamp(46px, 6vw, 78px)",
                letterSpacing: "-2px",
                lineHeight: 1.1,
                textShadow: "0 3px 28px rgba(0, 0, 0, 0.3)",
              }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Kishore K
            </motion.h1>

            {/* Animated role */}
            <div className="mb-3" style={{ minHeight: "42px" }}>
              <motion.h2
                key={roles[roleIndex]}
                className="fw-semibold"
                style={{
                  color: colors.white,
                  fontSize: "clamp(19px, 2.8vw, 29px)",
                  lineHeight: 1.45,
                  textShadow: "0 2px 15px rgba(0, 0, 0, 0.35)",
                }}
                initial={{
                  opacity: 0,
                  y: 16,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{ duration: 0.55 }}
              >
                I'm a{" "}
                <span
                  style={{
                    color: colors.cyan,
                    textShadow: "0 0 18px rgba(0, 217, 255, 0.4)",
                  }}
                >
                  {roles[roleIndex]}
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="mx-auto mx-lg-0 mb-4"
              style={{
                maxWidth: "550px",
                fontSize: "15px",
                lineHeight: 1.9,
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I build modern, responsive web applications using React, Java,
              Spring Boot, and SQL. I enjoy solving problems and turning ideas
              into reliable digital experiences.
            </motion.p>

            {/* Social links */}
            <motion.div
              className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                  style={{
                    width: "42px",
                    height: "42px",
                    color: colors.white,
                    background: "rgba(5, 15, 35, 0.82)",
                    border: "1px solid rgba(0, 217, 255, 0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                    color: colors.cyan,
                    borderColor: colors.cyan,
                    boxShadow: "0 0 18px rgba(0, 217, 255, 0.25)",
                  }}
                  whileTap={{ scale: 0.92 }}
                >
                  <i className={social.icon} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="/Downloads/Kishore_K_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-3 px-4 py-3 fw-semibold text-decoration-none"
                style={{
                  color: "#06101F",
                  background: `linear-gradient(110deg, ${colors.cyan}, ${colors.purple})`,
                  border: "none",
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 26px rgba(0, 217, 255, 0.35)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                Download CV
                <i className="fa-solid fa-download ms-2" />
              </motion.a>

              <motion.a
                href="#Projects"
                className="btn rounded-3 px-4 py-3 fw-semibold text-decoration-none"
                style={{
                  color: colors.white,
                  background: "rgba(5, 15, 35, 0.82)",
                  border: "1px solid rgba(0, 217, 255, 0.4)",
                  backdropFilter: "blur(8px)",
                }}
                whileHover={{
                  scale: 1.04,
                  color: colors.cyan,
                  borderColor: colors.purple,
                }}
                whileTap={{ scale: 0.96 }}
              >
                View My Work
                <i className="fa-solid fa-arrow-right ms-2" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT PROFILE */}
          <motion.div
            className="col-lg-5 d-flex justify-content-center align-items-center"
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="position-relative d-flex justify-content-center align-items-center"
              style={{
                width: "min(350px, 76vw)",
                aspectRatio: "1 / 1",
                x: imageX,
                y: imageY,
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Neon glow */}
              <motion.div
                className="position-absolute rounded-circle"
                style={{
                  inset: "5%",
                  background:
                    "radial-gradient(circle, rgba(0,217,255,0.28), rgba(139,92,246,0.22), transparent 70%)",
                  filter: "blur(25px)",
                }}
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />

              {/* Circular profile */}
              <motion.div
                className="position-relative rounded-circle p-1"
                style={{
                  width: "82%",
                  height: "82%",
                  background:
                    "linear-gradient(135deg, #00D9FF, #2878FF, #A78BFA)",
                  boxShadow:
                    "0 0 28px rgba(0,217,255,0.3), 0 0 55px rgba(139,92,246,0.2)",
                }}
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-100 h-100 rounded-circle overflow-hidden"
                  style={{ background: "#0B1224" }}
                >
                  <img
                    src={profileImage}
                    alt="Kishore K - Software Developer"
                    className="w-100 h-100"
                    loading="eager"
                    fetchPriority="high"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </motion.div>

              {/* Floating code badge */}
              <motion.div
                className="position-absolute d-flex align-items-center justify-content-center rounded-3 fw-bold"
                style={{
                  top: "12%",
                  right: "0%",
                  width: "58px",
                  height: "48px",
                  color: "#06101F",
                  background: colors.cyan,
                  boxShadow: "0 0 22px rgba(0,217,255,0.4)",
                }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                {"</>"}
              </motion.div>

              {/* Floating K badge */}
              <motion.div
                className="position-absolute d-flex align-items-center justify-content-center rounded-3 fw-bold"
                style={{
                  bottom: "12%",
                  left: "0%",
                  width: "46px",
                  height: "46px",
                  color: colors.white,
                  background: colors.purple,
                  boxShadow: "0 0 22px rgba(139,92,246,0.4)",
                }}
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                K
              </motion.div>

              {/* Projects badge */}
              <motion.div
                className="position-absolute rounded-3 px-3 py-2 text-center"
                style={{
                  right: "-2%",
                  bottom: "18%",
                  color: colors.white,
                  background: "rgba(5, 15, 35, 0.9)",
                  border: "1px solid rgba(0,217,255,0.3)",
                  backdropFilter: "blur(10px)",
                }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity }}
              >
                <div className="fw-bold" style={{ color: colors.cyan }}>
                  5+
                </div>

                <div style={{ color: colors.muted, fontSize: "10px" }}>
                  Projects
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
