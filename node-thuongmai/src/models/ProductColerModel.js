const mongoose = require('mongoose')

const productColersSchema = new mongoose.Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        imageColer: { type: String, required: true },
        nameColer: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const ProductColers = mongoose.model('ProductColers', productColersSchema);

module.exports = ProductColers;
