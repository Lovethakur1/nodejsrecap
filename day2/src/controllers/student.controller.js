const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  try {
    const data = await Student.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudents = async (req, res) => {
  const data = await Student.find().populate("classId");

  res.json(data);
};

exports.getStudentById = async (req, res) => {
  const data = await Student.findById(req.params.id).populate("classId");

  if (!data)
    return res.status(404).json({
      message: "Student not found"
    });

  res.json(data);
};

exports.updateStudent = async (req, res) => {
  const data = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.json(data);
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);

  res.json({
    message: "Student deleted successfully"
  });
};