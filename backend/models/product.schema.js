const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image : String,
    title : String,
    price : Number,
    category : String,
    size : String,
    colour : String
})

const product = mongoose.model("product",productSchema)
module.exports = product