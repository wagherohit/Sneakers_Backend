const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  searchProducts,
} = require("../controllers/productController");

router.get("/", getAllProducts);

router.get("/search", searchProducts);

router.get("/:id", getSingleProduct);

module.exports = router;