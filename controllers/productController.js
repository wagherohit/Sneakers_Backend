const Product = require("../model/productModel");


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.searchProducts = async (req, res) => {
  try {
    const { keyword, category, minPrice, maxPrice } = req.query;

    let query = {};

    if (keyword) {
      query.name = {
        $regex: keyword,
        $options: "i",
      };
    }

    if (category) {
      query.category = category;
    }

    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }

    const products = await Product.find(query);

    res.status(200).json({
      success: true,
      results: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};