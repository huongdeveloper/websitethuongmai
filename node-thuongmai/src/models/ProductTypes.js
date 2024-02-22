const mongoose = require('mongoose')

const productTypesSchema = new mongoose.Schema(
    {
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
        nameTypes: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);
const ProductTypes = mongoose.model('ProductTypes', productTypesSchema);

module.exports = ProductTypes;
