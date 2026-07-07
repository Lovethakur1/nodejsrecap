const Class = require("../models/Class");

exports.createClass = async (req, res) => {
  try {
    const data = await Class.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getClasses = async (req, res) => {
  const data = await Class.find();
  res.json(data);
};

exports.getClassById = async (req, res) => {
  const data = await Class.findById(req.params.id);

  if (!data)
    return res.status(404).json({ message: "Class not found" });

  res.json(data);
};

exports.updateClass = async (req, res) => {
  const data = await Class.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.json(data);
};

exports.deleteClass = async (req, res) => {
  await Class.findByIdAndDelete(req.params.id);

  res.json({
    message: "Class deleted successfully"
  });
};