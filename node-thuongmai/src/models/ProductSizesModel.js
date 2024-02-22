const mongoose = require('mongoose')

const productSizesSchema = new mongoose.Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        nameSize: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);
const ProductSizes = mongoose.model('ProductSizes', productSizesSchema);

module.exports = ProductSizes;
