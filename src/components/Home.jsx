import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import profileImage from "../assets/myprofile.png";

const roles = [
  "Front End Developer",
  "Back End Developer",
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

  // Role change
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Mouse movement
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

  const imageX = useTransform(smoothX, [-500, 500], [-12, 12]);
  const imageY = useTransform(smoothY, [-500, 500], [-12, 12]);

  const glowX = useTransform(smoothX, [-500, 500], [-30, 30]);
  const glowY = useTransform(smoothY, [-500, 500], [-30, 30]);

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="Home"
      className="home-section mt-5"
      style={{ minHeight: "100vh" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Home Content */}
      <div className="container home-container">
        <div className="row align-items-center">
          <motion.div
            className="col-lg-7 home-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Greeting */}
            <motion.p
              className="home-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, It's Me
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Kishore K
            </motion.h1>

            {/* Dynamic Role */}
            <div className="role-wrapper">
              <motion.h2
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 25, filter: "blur(7px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                And I'm a <span>{roles[roleIndex]}</span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="home-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              I build responsive and user-friendly web applications using modern
              frontend and backend technologies.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="home-socials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="home-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.a
                href="/Downloads/Kishore_K_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(25,135,84,0.45)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
                <i className="fa-solid fa-download ms-2"></i>
              </motion.a>

              <motion.a
                href="#Projects"
                className="work-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-lg-5 home-image-column"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="profile-area"
              style={{ x: imageX, y: imageY }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow */}
              <motion.div
                className="profile-glow"
                animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Hexagon */}
              <motion.div
                className="hexagon"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <div className="hexagon-inner">
                  <img
                    src={profileImage}
                    alt="Kishore K"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </motion.div>

              {/* Floating Code */}
              <motion.div
                className="floating-code"
                animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                &lt;/&gt;
              </motion.div>

              {/* Floating K */}
              <motion.div
                className="floating-k"
                animate={{ y: [0, 8, 0], rotate: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                K
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
