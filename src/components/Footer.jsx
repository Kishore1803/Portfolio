import React from "react";
import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="bg-black text-white border-top border-secondary border-opacity-25">
      <div className="container py-4">
        <div className="row align-items-center g-3">
          {/* Logo */}
          <div className="col-md-4 text-center text-md-start">
            <a
              href="#Home"
              className="text-white text-decoration-none fw-bold"
              style={{ fontSize: "20px" }}
            >
              <span className="text-success">Kishore</span>
            </a>
          </div>
    
          {/* Copyright */}
          <div className="col-md-4 text-center">
            <small className="text-secondary">
              © 2026 Kishore K. All rights reserved.
            </small>
          </div>

          {/* Back to top */}
          <div className="col-md-4 text-center text-md-end">
            <motion.a
              href="#Home"
              className="text-secondary text-decoration-none"
              style={{ fontSize: "12px" }}
              whileHover={{ color: "#198754" }}
            >
              Back to top
              <i className="fa-solid fa-arrow-up ms-2"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
