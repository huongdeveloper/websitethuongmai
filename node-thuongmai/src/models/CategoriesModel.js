const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);
const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;
