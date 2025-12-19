const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Save to MongoDB
    await Contact.create({ name, email, message });

    // Send email to YOU
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Response for frontend
    res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createContact };
