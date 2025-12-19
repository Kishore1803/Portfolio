const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");        // ✅ ADD
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
connectDB();

const app = express();

app.use(cors());                     // ✅ ADD THIS LINE
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/contact", contactRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on ${PORT}`)
);
