const express = require("express");
const router = express.Router();
const { getAllProduct } = require("./getProducts.js");
const { getAllcategoryProduct } = require("./get_category_products");
const { searchForAllProduct } = require("./get_products_by_name");
const getCategories = require("./get_category");
const getProduct = require("./get_product");
const addToCart = require("./add_to_cart");
const deleteItem = require("./deleteItem");
const register = require("./register");
const getCartProdusts = require("./getCartProdusts");
const add_order = require("./add_order");

const login = false;
router.get("/api/category", getCategories);
router.get("/api/shop/:category_id", getAllcategoryProduct);
router.get("/api/search/:searchInput", searchForAllProduct);
router.get("/api/shop", getAllProduct);
router.get("/api/product/:id", getProduct.get);
router.post("/api/register", register.post);
router.get("/api/cart-products", getCartProdusts.getProducts);
router.get("/api/delete/:id", deleteItem.delete);
// login true temp /////////////////////////////////////////////////////////
if (login || true) {
  router.post("/api/shipping_info", add_order);
  router.post("/api/add-to-cart", addToCart.post);
} else {
  router.post("/api/add-to-cart", (req, res, next) => {
    res.status(404);
    next(new Error({ message: "go to register" }));
  });
  router.post("/api/shipping_info", (req, res, next) => {
    next(new Error("go to register"));
  });
}

module.exports = router;
