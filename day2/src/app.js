const express = require("express");

const studentRoutes = require("./routes/student.routes");
const classRoutes = require("./routes/class.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Student API is running..."
  });
});

app.use("/api/students", studentRoutes);
app.use("/api/classes", classRoutes);

module.exports = app;