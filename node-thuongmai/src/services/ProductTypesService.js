const ProductTypes = require("../models/ProductTypes")
const createProductTypes = (newProductTypes) => {
    return new Promise(async (resolve, reject) => {
        const { categoryId, nameTypes } = newProductTypes
        try {
            const checkProductTypes = await ProductTypes.findOne({
                nameTypes: nameTypes
            })
            if (checkProductTypes !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of Categories is already'
                })
            }
            const newProductTypes = await ProductTypes.create({
                nameTypes, categoryId 
            })
            if (newProductTypes) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newProductTypes
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const getAllProductTypes = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProductTypes = await ProductTypes.count();

            let query = ProductTypes.find();

            query = query.populate('categoryId', 'name');

            if (filter) {
                const label = filter[0];
                const regex = new RegExp(filter[1], 'i');
                query = query.find({ [label]: regex });
            }

            if (sort) {
                const sortDirection = sort[0] === 'asc' ? 1 : -1;
                const sortField = sort[1];
                query = query.sort({ [sortField]: sortDirection, createdAt: -1, updatedAt: -1 });
            }

            if (limit) {
                query = query.limit(limit).skip(page * limit);
            }

            const allProductTypes = await query.exec();

            resolve({
                status: 'OK',
                message: 'Success',
                data: allProductTypes,
                total: totalProductTypes,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProductTypes / limit)
            });
        } catch (e) {
            reject(e);
        }
    });
};
const updateProductTypes = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkroductTypes = await ProductTypes.findOne({
                _id: id
            })
            if (checkroductTypes === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            const updateProductTypes = await ProductTypes.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateProductTypes
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getDetailsProductTypes = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const productTypes = await ProductTypes.findOne({
                _id: id
            })
            if (productTypes === null) {
                resolve({
                    status: 'ERR',
                    message: 'The productTypes is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: productTypes
            })
        } catch (e) {
            reject(e)
        }
    })
}
const deleteProductTypes = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkroductTypes = await ProductTypes.findOne({
                _id: id
            })
            if (checkroductTypes === null) {
                resolve({
                    status: 'ERR',
                    message: 'The category is not defined'
                })
            }

            await ProductTypes.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete category success',
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getProductAllTypes = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const ProductAllTypes = await ProductTypes.distinct('type')
            resolve({
                status: 'OK',
                message: 'Success',
                data: ProductAllTypes,
            })
        } catch (e) {
            reject(e)
        }
    })
}
const deleteManyProductTypes = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ProductTypes.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete product success',
            })
        } catch (e) {
            reject(e)
        }
    })
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