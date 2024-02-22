const CategoriesService = require('../services/CategoriesService')
const createCategory = async (req, res) => {
    try {
        const { name, image } = req.body
        if ( !name || !image ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await CategoriesService.createCategory(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        const data = req.body
        if (!categoryId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The categoryId is required'
            })
        }
        const response = await CategoriesService.updateCategory(categoryId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getDetailsCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        if (!categoryId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The categoryId is required'
            })
        }
        const response = await CategoriesService.getDetailsCategory(categoryId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        if (!categoryId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The categoryId is required'
            })
        }
        const response = await CategoriesService.deleteCategory(categoryId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllCategory = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await CategoriesService.getAllCategory(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const deleteMany = async (req, res) => {
    try {
        const ids = req.body.ids
        if (!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }
        const response = await CategoriesService.deleteManyCategory(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllType = async (req, res) => {
    try {
        const response = await CategoriesService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {
    createCategory,
    updateCategory,
    getDetailsCategory,
    deleteCategory,
    getAllCategory,
    deleteMany,
    getAllType
}
