const ProductTypesService = require('../services/ProductTypesService')

const createProductTypes = async (req, res) => {
    try {
        const { categoryId, nameTypes } = req.body
        if ( !categoryId || !nameTypes ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductTypesService.createProductTypes(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllProductTypes = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ProductTypesService.getAllProductTypes(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const updateProductTypes = async (req, res) => {
    try {
        const ProductTypesId = req.params.id
        const data = req.body
        if (!ProductTypesId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ProductTypesId is required'
            })
        }
        const response = await ProductTypesService.updateProductTypes(ProductTypesId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getDetailsProductTypes = async (req, res) => {
    try {
        const ProductTypesId = req.params.id
        if (!ProductTypesId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ProductTypesId is required'
            })
        }
        const response = await ProductTypesService.getDetailsProductTypes(ProductTypesId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const deleteProductTypes = async (req, res) => {
    try {
        const ProductTypesId = req.params.id
        if (!ProductTypesId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ProductTypesId is required'
            })
        }
        const response = await ProductTypesService.deleteProductTypes(ProductTypesId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getProductAllTypes = async (req, res) => {
    try {
        const response = await ProductTypesService.getProductAllTypes()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const deleteManyProductTypes = async (req, res) => {
    try {
        const ids = req.body.ids
        if (!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }
        const response = await ProductTypesService.deleteManyProductTypes(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {
    createProductTypes,
    getAllProductTypes,
    updateProductTypes,
    getDetailsProductTypes,
    deleteProductTypes,
    getProductAllTypes,
    deleteManyProductTypes
}