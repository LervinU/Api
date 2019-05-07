import express from "express";

const router = express.Router();
const controller = require("./controllers/product.controllers");

router.get("/", controller.getProducts);
router.get("/:id", controller.getSingleProduct);
router.post("/", controller.createProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;
