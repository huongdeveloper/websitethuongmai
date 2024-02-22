const express = require("express");
const router = express.Router()
const ProductTypesController = require('../controllers/ProductTypesController');
const { authMiddleWare } = require("../middleware/authMiddleware");
router.post('/create', ProductTypesController.createProductTypes)
router.put('/update/:id', authMiddleWare, ProductTypesController.updateProductTypes)
router.get('/get-details/:id', ProductTypesController.getDetailsProductTypes)
router.delete('/delete/:id', authMiddleWare, ProductTypesController.deleteProductTypes)
router.get('/get-all', ProductTypesController.getAllProductTypes)
router.post('/delete-many', authMiddleWare, ProductTypesController.deleteManyProductTypes)
router.get('/get-all-type', ProductTypesController.getProductAllTypes)

module.exports = router