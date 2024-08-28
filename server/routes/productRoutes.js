const express = require("express");
const router = express.Router();

const {
  saveProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct
  
} = require("../controllers/productController");

router.post("/saveProduct", saveProduct);
router.get("/allProducts", getAllProducts);
router.get("/singleProduct/:id", getSingleProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);
module.exports = router;
