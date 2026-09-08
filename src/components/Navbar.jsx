import React from "react";
import { motion } from "motion/react";

const navItems = [
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skill" },
  { name: "Experience", href: "#Experience" },
  { name: "Training", href: "#Training"},
  { name: "Projects", href: "#Projects" },
  { name: "Education", href: "#Education" },
  { name: "Certifications", href: "#Certifications" },
];

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top bg-black border-bottom border-secondary border-opacity-25"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="container py-2">
        {/* ================= BRAND ================= */}
        <motion.a
          href="#Home"
          className="navbar-brand d-flex align-items-center gap-2 m-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* K Logo */}
          <span
            className="d-flex align-items-center justify-content-center rounded-circle bg-success text-dark fw-bold"
            style={{ width: "40px", height: "40px", fontSize: "22px" }}
          >
            K
          </span>

          {/* Name */}
          <span
            className="fw-bold text-white"
            style={{ fontSize: "25px", letterSpacing: "-0.5px" }}
          >
            Kishore
          </span>
        </motion.a>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="navbar-toggler border-0 shadow-none p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ================= NAVIGATION ================= */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 text-start">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <motion.a
                  href={item.href}
                  className="nav-link text-white px-3 py-2 text-uppercase"
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  }}
                  whileHover={{ color: "#198754", x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}

            {/* ================= CONTACT BUTTON ================= */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <motion.a
                href="#Contact"
                className="btn btn-success rounded-pill px-4 py-2 fw-semibold"
                style={{ fontSize: "12px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
