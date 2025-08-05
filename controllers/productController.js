const { Product } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  product ? res.json(product) : res.status(404).json({ error: 'Not found' });
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

exports.updateProduct = async (req, res) => {
  const [updated] = await Product.update(req.body, { where: { id: req.params.id } });
  updated ? res.json(await Product.findByPk(req.params.id)) : res.status(404).json({ error: 'Not found' });
};

exports.deleteProduct = async (req, res) => {
  const deleted = await Product.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ success: true }) : res.status(404).json({ error: 'Not found' });
};
