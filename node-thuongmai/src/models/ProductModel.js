const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        trademark: { type: String, required: true },
        price: { type: Number, required: true },
        rating: { type: Number, required: true },
        selled: { type: Number },
        discount: { type: Number },
        productLine: { type: Number, required: true },
        quantity: { type: Number, required: true },
        describe: { type: String, required: true },
        details: { type: String, required: true },
        characteristic: { type: String, required: true },
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
        productTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductTypes', required: true },
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
