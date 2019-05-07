const Product = require("../../models/product");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const getSingleProduct = async (req, res) => {
  const product = await Task.findById(req.params.id);
  res.json(product);
};

const createProduct = async (req, res) => {
  const { name, description, price, category, quantity } = req.body;
  const product = new Product({ name, description, price, category, quantity });
  await product.save();
  res.json({ Status: "Product saved" });
};

const updateProduct = async (req, res) => {
  const { name, description, price, category, quantity } = req.body;
  const newProduct = { name, description, price, category, quantity };
  await Product.findByIdAndUpdate(req.params.id, newProduct);
  res.json({ Status: "Product Updated" });
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ Status: "Product Deleted" });
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
