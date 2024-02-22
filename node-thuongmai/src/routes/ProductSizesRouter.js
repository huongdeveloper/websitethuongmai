const express = require("express");
const router = express.Router()
const ProductSizesController = require('../controllers/ProductSizesController');
const { authMiddleWare } = require("../middleware/authMiddleware");


module.exports = router