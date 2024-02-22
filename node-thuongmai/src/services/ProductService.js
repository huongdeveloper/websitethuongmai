const Product = require("../models/ProductModel")
const Descriptions = require("../models/DescriptionsModel")
const ProductSizes = require("../models/ProductSizesModel")
const ProductColers = require("../models/ProductColerModel")
const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, trademark, productTypeId, quantity, price, rating, describe, discount, categoryId, productLine, details, characteristic, descriptions, colers, sizes } = newProduct;

        try {
            const checkProduct = await Product.findOne({ name: name });
            if (checkProduct !== null) {
                reject({
                    status: 'ERR',
                    message: 'The name of product is already'
                });
            }

            const newProductData = {
                name, 
                image,
                trademark, 
                productTypeId,
                quantity: Number(quantity),
                price, 
                rating,
                describe,
                discount: Number(discount),
                categoryId,
                productLine: Number(productLine),
                details,
                characteristic,
            };

            const newProduct = await Product.create(newProductData);

            if (newProduct) {
                if (descriptions && descriptions.length > 0) {
                    await Descriptions.create({ productId: newProduct._id, imageDes: descriptions });
                }

                if (colers && colers.length > 0) {
                    colers.forEach(async (coler) => {
                        await ProductColers.create({
                            productId: newProduct._id,
                            imageColer: coler.imageColer,
                            nameColer: coler.nameColer,
                        });
                    });
                }

                if (sizes && sizes.length > 0) {
                    sizes.forEach(async (size) => {
                        await ProductSizes.create({
                            productId: newProduct._id,
                            nameSize: size.nameSize,
                        });
                    });
                }

                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newProduct
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};
const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id
            })
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedProduct
            })
        } catch (e) {
            reject(e)
        }
    })
}
const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id
            })
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            await Product.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete product success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyProduct = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Product.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete product success',
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findOne({
                _id: id
            })
            if (product === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: product
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.count()
            let allProduct = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await Product.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allProductSort = await Product.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allProductSort,
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit)
                })
            }
            if(!limit) {
                allProduct = await Product.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allProduct = await Product.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allProduct,
                total: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await Product.distinct('type')
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
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct,
    deleteManyProduct,
    getAllType
}