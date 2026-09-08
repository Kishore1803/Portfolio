import React, { useState } from "react";
import { motion } from "motion/react";
import { submitContactForm } from "./Api/ContactAPI";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await submitContactForm(formData);

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Unable to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="py-5 min-vh-100 bg-black text-white d-flex align-items-center"
    >
      <div className="container py-5">
        {/* Header */}
        <motion.div
          className="mb-3"
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
            Let's work <span className="text-success">together.</span>
          </h2>

          <p className="text-secondary mb-0" style={{ fontSize: "15px" }}>
            Feel free to reach out for collaborations or opportunities.
          </p>
        </motion.div>

        <div className="row g-5">
          {/* Contact Information */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-top border-secondary border-opacity-25 pt-4">
              <small
                className="text-success text-uppercase fw-semibold"
                style={{ fontSize: "10px", letterSpacing: "1.5px" }}
              >
                Get in touch
              </small>

              <h3
                className="fw-semibold mt-3 mb-4"
                style={{ fontSize: "25px" }}
              >
                Have a project or opportunity?
              </h3>

              {/* Email */}
              <div className="d-flex gap-3 mb-4">
                <i className="fa-solid fa-envelope text-success pt-1"></i>

                <div>
                  <small className="text-secondary d-block mb-1">Email</small>
                  <a
                    href="mailto:kannan.v4704@gmail.com"
                    className="text-white text-decoration-none"
                    style={{ fontSize: "14px" }}
                  >
                    kannan.v4704@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex gap-3 mb-4">
                <i className="fa-solid fa-phone text-success pt-1"></i>

                <div>
                  <small className="text-secondary d-block mb-1">Phone</small>
                  <a
                    href="tel:+919600825271"
                    className="text-white text-decoration-none"
                    style={{ fontSize: "14px" }}
                  >
                    +91 9790385271
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="d-flex gap-3 mb-4">
                <i className="fa-solid fa-location-dot text-success pt-1"></i>
                <div>
                  <small className="text-secondary d-block mb-1">
                    Location
                  </small>
                  <span style={{ fontSize: "14px" }}>
                    Salem, Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-top border-secondary border-opacity-25 pt-4 mt-4">
                <small className="text-secondary d-block mb-3">
                  Find me online
                </small>

                <div className="d-flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/kishore-k-25b131288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary fs-5"
                    whileHover={{ color: "#198754", y: -3 }}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Kishore1803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary fs-5"
                    whileHover={{ color: "#198754", y: -3 }}
                  >
                    <i className="fa-brands fa-github"></i>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/919600825271"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary fs-5"
                    whileHover={{ color: "#198754", y: -3 }}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="border border-secondary border-opacity-25 rounded-4 p-4 p-md-5"
            >
              <div className="row g-3">
                {/* Name */}
                <div className="col-md-6">
                  <label className="text-secondary mb-2 small">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control bg-dark text-white border-secondary shadow-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="text-secondary mb-2 small">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control bg-dark text-white border-secondary shadow-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="col-12">
                  <label className="text-secondary mb-2 small">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control bg-dark text-white border-secondary shadow-none"
                    placeholder="What is this about?"
                    required
                  />
                </div>

                {/* Message */}
                <div className="col-12">
                  <label className="text-secondary mb-2 small">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control bg-dark text-white border-secondary shadow-none"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    style={{ resize: "none" }}
                  ></textarea>
                </div>

                {/* Button */}
                <div className="col-12">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn btn-success rounded-pill px-4 py-2 mt-2"
                    whileHover={!loading ? { scale: 1.03 } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Status */}
                {status.message && (
                  <motion.div
                    className={`col-12 ${
                      status.type === "success" ? "text-success" : "text-danger"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {status.message}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
