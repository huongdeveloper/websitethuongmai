const mongoose = require('mongoose')

const descriptionsSchema = new mongoose.Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        imageDes: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);
const Descriptions = mongoose.model('Descriptions', descriptionsSchema);

module.exports = Descriptions;
