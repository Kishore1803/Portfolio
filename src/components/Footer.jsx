
import { motion } from "motion/react";

const currentyear = new Date().getFullYear();

const headingGradient = {
  background: "linear-gradient(90deg, #00E5FF, #A78BFA, #FF75D8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const quickLinks = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skill" },
  { label: "Experience", href: "#Experience" },
  { label: "Training", href: "#Training" },
  { label: "Projects", href: "#Projects" },
  { label: "Education", href: "#Education" },
  { label: "Certifications", href: "#Certifications" },
  { label: "Contact", href: "#Contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Kishore1803",
    icon: "fa-brands fa-github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kishore-k-25b131288",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919600825271",
    icon: "fa-brands fa-whatsapp",
  },
  {
    label: "Email",
    href: "mailto:kannan.v4704@gmail.com",
    icon: "fa-solid fa-envelope",
  },
];

function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background: "transparent",
        borderTop: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <div className="container py-5">
        {/* Main Footer */}
        <div className="row g-5">
          {/* Developer Information */}
          <div className="col-lg-4 col-md-6">
            <motion.a
              href="#Home"
              className="text-decoration-none fw-bold d-inline-block"
              style={{
                ...headingGradient,
                fontSize: "28px",
                letterSpacing: "0.5px",
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25 }}
            >
              Kishore K
            </motion.a>

            <p
              className="mt-3 mb-3"
              style={{
                color: "#FFFFFF",
                fontSize: "14px",
                lineHeight: "1.9",
                maxWidth: "320px",
              }}
            >
              Java Full Stack Developer passionate about building
              responsive, user-friendly web applications with modern
              technologies.
            </p>

            <p
              className="mb-3"
              style={{
                color: "#FFFFFF",
                fontSize: "12px",
              }}
            >
              <i
                className="fa-solid fa-location-dot me-2"
                style={{ color: "#00E5FF" }}
              />
              Salem, Tamil Nadu, India
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  title={social.label}
                  className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                  style={{
                    width: "42px",
                    height: "42px",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.25)",
                    background: "transparent",
                    fontSize: "16px",
                  }}
                  whileHover={{
                    y: -4,
                    color: "#00E5FF",
                    borderColor: "#00E5FF",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <i className={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="col-lg-4 col-md-6">
            <h5
              className="fw-bold mb-4"
              style={{ ...headingGradient, fontSize: "17px" }}
            >
              Quick Links
            </h5>

            <div className="row g-3">
              {quickLinks.map((link) => (
                <div className="col-6" key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-decoration-none d-inline-flex align-items-center gap-2"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "13px",
                    }}
                    whileHover={{
                      x: 4,
                      color: "#00E5FF",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <i
                      className="fa-solid fa-angle-right"
                      style={{
                        color: "#00E5FF",
                        fontSize: "10px",
                      }}
                    />
                    {link.label}
                  </motion.a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact and Resume */}
          <div className="col-lg-4 col-md-12">
            <h5
              className="fw-bold mb-4"
              style={{ ...headingGradient, fontSize: "17px" }}
            >
              Let's Connect
            </h5>

            <p
              className="mb-3"
              style={{
                color: "#FFFFFF",
                fontSize: "13px",
                lineHeight: "1.8",
              }}
            >
              Have a project, collaboration, or job opportunity in mind?
              Feel free to reach out.
            </p>

            <a
              href="#Contact"
              className="text-decoration-none d-inline-flex align-items-center gap-2 mb-3"
              style={{
                ...headingGradient,
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              Contact Me
              <i className="fa-solid fa-arrow-right" />
            </a>

            <div>
              <motion.a
                href="/Downloads/Kishore_K_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2 mt-2 d-inline-flex align-items-center gap-2"
                style={{
                  color: "#FFFFFF",
                  background: "transparent",
                  border: "1px solid rgba(0,229,255,0.65)",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
                whileHover={{
                  y: -3,
                  borderColor: "#A78BFA",
                }}
                transition={{ duration: 0.25 }}
              >
                <i className="fa-solid fa-download" />
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="mt-5 pt-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="row align-items-center g-3">
            <div className="col-md-6 text-center text-md-start">
              <small
                style={{
                  color: "#FFFFFF",
                  fontSize: "12px",
                  lineHeight: "1.8",
                }}
              >
                © {currentyear} Kishore K. All rights reserved.
              </small>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <motion.a
                href="#Home"
                className="text-decoration-none d-inline-flex align-items-center gap-2"
                style={{
                  ...headingGradient,
                  fontSize: "12px",
                  fontWeight: 600,
                }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
              >
                Back to top
                <i className="fa-solid fa-arrow-up" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
