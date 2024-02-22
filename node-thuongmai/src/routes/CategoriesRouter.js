const express = require("express");
const router = express.Router()
const CategoriesController = require('../controllers/CategoriesController');
const { authMiddleWare } = require("../middleware/authMiddleware");
router.post('/create', CategoriesController.createCategory)
router.put('/update/:id', authMiddleWare, CategoriesController.updateCategory)
router.get('/get-details/:id', CategoriesController.getDetailsCategory)
router.delete('/delete/:id', authMiddleWare, CategoriesController.deleteCategory)
router.get('/get-all', CategoriesController.getAllCategory)
router.post('/delete-many', authMiddleWare, CategoriesController.deleteMany)
router.get('/get-all-type', CategoriesController.getAllType)

module.exports = router