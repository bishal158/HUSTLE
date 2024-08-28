
const Product = require('../models/product.model')

const saveProduct = async (req, res, next) => {
  const productData = req.body;
  try {
    const product = await Product.create(productData)
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getAllProducts = async (req, res, next) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};


const getSingleProduct = async (req, res, next) => {
   const {id} = req.params
    try {
      const product = await Product.findById(id)
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req , res , next)=>{
    const {id} = req.params;  // destructuring the id from the request parameters
    try{
        const deletedProduct =  await Product.findByIdAndDelete(id);
        res.status(200).json(deletedProduct);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
const updateProduct = async (req , res , next) => {
    const {id} = req.params; 
    const updatedProduct = req.body; 
    try{
        const product = await Product.findByIdAndUpdate(id, updatedProduct, {new: true});
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }

}
exports.getAllProducts = getAllProducts
exports.saveProduct = saveProduct;
exports.getSingleProduct = getSingleProduct;
exports.deleteProduct = deleteProduct;
exports.updateProduct = updateProduct;