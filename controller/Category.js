const { Category } = require("../model/Category");

exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createCategory = async (req, res) => {
  // This Product we have to get from API body
  const category = new Category(req.body);
  try {
    const response = await category.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
