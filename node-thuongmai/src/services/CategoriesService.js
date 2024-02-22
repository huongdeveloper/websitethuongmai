const Categories = require("../models/CategoriesModel")
const createCategory = (newCategory) => {
    return new Promise(async (resolve, reject) => {
        const { name, image } = newCategory
        try {
            const checkCategory = await Categories.findOne({
                name: name
            })
            if (checkCategory !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of Categories is already'
                })
            }
            const newCategory = await Categories.create({
                name, image 
            })
            if (newCategory) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newCategory
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
const updateCategory = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCategory = await Categories.findOne({
                _id: id
            })
            if (checkCategory === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            const updateCategory = await Categories.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateCategory
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getDetailsCategory = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const category = await Categories.findOne({
                _id: id
            })
            if (category === null) {
                resolve({
                    status: 'ERR',
                    message: 'The category is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: category
            })
        } catch (e) {
            reject(e)
        }
    })
}
const deleteCategory = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCategory = await Categories.findOne({
                _id: id
            })
            if (checkCategory === null) {
                resolve({
                    status: 'ERR',
                    message: 'The category is not defined'
                })
            }

            await Categories.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete category success',
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getAllCategory = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalcategory = await Categories.count()
            let allCategory = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await Categories.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalcategory,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalcategory / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allCategorySort = await Categories.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allCategorySort,
                    total: totalcategory,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalcategory / limit)
                })
            }
            if(!limit) {
                allCategory = await Categories.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allCategory = await Categories.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allCategory,
                total: totalcategory,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalcategory / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}
const deleteManyCategory = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Categories.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete category success',
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await Categories.distinct('type')
            resolve({
                status: 'OK',
                message: 'Success',
                data: allType,
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createCategory,
    updateCategory,
    getDetailsCategory,
    deleteCategory,
    getAllCategory,
    deleteManyCategory,
    getAllType
}