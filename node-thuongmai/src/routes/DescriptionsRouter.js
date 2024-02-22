const express = require("express");
const router = express.Router()
const DescriptionsController = require('../controllers/DescriptionsController');
const { authMiddleWare } = require("../middleware/authMiddleware");

module.exports = router