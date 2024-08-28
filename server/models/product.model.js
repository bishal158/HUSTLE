const mongoose = require('mongoose')


const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Product Name must be provided"]
        },
        quantity:{
            type: Number,
            required: [true, "Product Quantity must be provided"],
            default: 0
        },
        price:{
            type: Number,
            required: [true, "Product Price must be provided"],
            min: [0, "Product Price must be a positive number"]
        }

    },
    
       { timestamps: true } // adds createdAt and updatedAt fields
    

)


const Product = mongoose.model('Product', productSchema)
module.exports = Product;