const express = require("express");
const router = express.Router()
const ProductColersController = require('../controllers/ProductColersController');
const { authMiddleWare } = require("../middleware/authMiddleware");

module.exports = router