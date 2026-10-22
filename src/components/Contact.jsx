import { useState } from "react";
import { motion } from "motion/react";
import { submitContactForm } from "./Api/ContactAPI";

const headingGradient = {
  background: "linear-gradient(90deg, #00E5FF, #A78BFA, #FF75D8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const accentColor = "#00E5FF";

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
      className="min-vh-100 text-white d-flex align-items-center"
    >
      <div className="container py-5">
        {/* Header */}
        <motion.div
          className="mt-5 mb-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="mb-2 fw-semibold"
            style={{
              color: accentColor,
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </p>

          <h2
            className="fw-bold mt-2 mb-3"
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              letterSpacing: "-2px",
            }}
          >
            Let's work <span>together</span>
          </h2>

          <p className="mb-0">
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
            <div
              className="border-top "
              style={{ borderColor: "rgba(255,255,255,0.22)" }}
            >
              <small
                className="fw-semibold text-uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                }}
              >
                Get in touch
              </small>

              <h3
                className="fw-semibold mt-3 mb-4"
                style={{
                  ...headingGradient,
                  fontSize: "25px",
                }}
              >
                Have a project or opportunity?
              </h3>

              {/* Email */}
              <div className="d-flex gap-3 mb-4">
                <i
                  className="fa-solid fa-envelope pt-1"
                  style={{ color: accentColor }}
                />

                <div>
                  <small className="d-block mb-1" style={{ color: "#FFFFFF" }}>
                    Email
                  </small>

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
                <i
                  className="fa-solid fa-phone pt-1"
                  style={{ color: accentColor }}
                />

                <div>
                  <small className="d-block mb-1" style={{ color: "#FFFFFF" }}>
                    Phone
                  </small>

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
                <i
                  className="fa-solid fa-location-dot pt-1"
                  style={{ color: accentColor }}
                />

                <div>
                  <small className="d-block mb-1" style={{ color: "#FFFFFF" }}>
                    Location
                  </small>

                  <span style={{ fontSize: "14px", color: "#FFFFFF" }}>
                    Salem, Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="border-top pt-4 mt-4"
                style={{ borderColor: "rgba(255,255,255,0.22)" }}
              >
                <small className="d-block mb-3" style={{ color: "#FFFFFF" }}>
                  Find me online
                </small>

                <div className="d-flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/kishore-k-25b131288"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{ color: "#FFFFFF", fontSize: "20px" }}
                    whileHover={{ color: "#00E5FF", y: -3 }}
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </motion.a>

                  <motion.a
                    href="https://github.com/Kishore1803"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{ color: "#FFFFFF", fontSize: "20px" }}
                    whileHover={{ color: "#A78BFA", y: -3 }}
                  >
                    <i className="fa-brands fa-github" />
                  </motion.a>

                  <motion.a
                    href="https://wa.me/919600825271"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    style={{ color: "#FFFFFF", fontSize: "20px" }}
                    whileHover={{ color: "#38F8C1", y: -3 }}
                  >
                    <i className="fa-brands fa-whatsapp" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form — backend logic unchanged */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-4 p-4 p-md-5"
              style={{ background: "transparent" }}
            >
              <div className="row g-3">
                {/* Name */}
                <div className="col-md-6">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 small"
                    style={{ color: "#FFFFFF" }}
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control text-white shadow-none"
                    style={{
                      background: "transparent",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 small"
                    style={{ color: "#FFFFFF" }}
                  >
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control text-white shadow-none"
                    style={{
                      background: "rgba(10,15,30,0.35)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="col-12">
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 small"
                    style={{ color: "#FFFFFF" }}
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control text-white shadow-none"
                    style={{
                      background: "rgba(10,15,30,0.35)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                    placeholder="What is this about?"
                    required
                  />
                </div>

                {/* Message */}
                <div className="col-12">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 small"
                    style={{ color: "#FFFFFF" }}
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control text-white shadow-none"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    style={{
                      resize: "none",
                      background: "rgba(10,15,30,0.35)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="col-12">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn rounded-pill px-4 py-2 mt-2 text-dark fw-semibold"
                    style={{
                      background: "linear-gradient(90deg, #00E5FF, #A78BFA)",
                      border: "none",
                    }}
                    whileHover={!loading ? { scale: 1.03 } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fa-solid fa-arrow-right ms-2" />
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
                    role="status"
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
