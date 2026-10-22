import { useState } from "react";
import { motion } from "motion/react";

const navItems = [
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skill" },
  { name: "Experience", href: "#Experience" },
  { name: "Training", href: "#Training" },
  { name: "Projects", href: "#Projects" },
  { name: "Education", href: "#Education" },
  { name: "Certifications", href: "#Certifications" },
];

const cyan = "#00D9FF";
const purple = "#A78BFA";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setMenuOpen(false);

    const section = document.querySelector(href);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg fixed-top"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "rgba(5, 10, 25, 0.42)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(0, 217, 255, 0.15)",
        width: "100%",
        maxWidth: "100%",
        zIndex: 1050,
      }}
    >
      <div className="container py-2">
        {/* BRAND */}
        <motion.a
          href="#Home"
          className="navbar-brand d-flex align-items-center gap-2 m-0"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#Home");
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          style={{ textDecoration: "none" }}
        >
          <motion.span
            className="d-flex align-items-center justify-content-center rounded-3 fw-bold"
            style={{
              width: "42px",
              height: "42px",
              fontSize: "22px",
              color: "#06101F",
              background: `linear-gradient(135deg, ${cyan}, ${purple})`,
              boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)",
              flexShrink: 0,
            }}
            whileHover={{ rotate: 5 }}
          >
            K
          </motion.span>

          <span
            className="fw-bold"
            style={{ color: "#F1F5F9", fontSize: "23px" }}
          >
            Kishore
          </span>
        </motion.a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-toggler shadow-none p-2"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            border: "1px solid rgba(0, 217, 255, 0.35)",
            borderRadius: "10px",
            background: "rgba(5, 15, 35, 0.65)",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </button>

        {/* NAV LINKS */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul
            className="navbar-nav ms-auto align-items-lg-center gap-lg-1 text-start"
            style={{ maxWidth: "100%" }}
          >
            {navItems.map((item, index) => (
              <li className="nav-item" key={item.name}>
                <motion.a
                  href={item.href}
                  className="nav-link px-3 py-2 text-uppercase"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  style={{
                    color: "#E2E8F0",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.55px",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s ease",
                  }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.045 }}
                  whileHover={{ color: cyan, y: -2 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}

            {/* CONTACT BUTTON */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0 mb-2 mb-lg-0">
              <motion.a
                href="#Contact"
                className="btn rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#Contact");
                }}
                style={{
                  color: "#06101F",
                  background: `linear-gradient(110deg, ${cyan}, ${purple})`,
                  border: "none",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 22px rgba(0, 217, 255, 0.28)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
                <i className="fa-regular fa-paper-plane" />
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
