const ProductService = require('../services/product-service');
const productService = new ProductService();

const create = async (req,res) => {
    try {
        const response = await productService.create(req.body);
        return res.status(201).json({
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error
        });
    }
}

const updateQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const updatedProduct = await productService.updateQuantity(id, quantity);

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json({ message: 'Quantity updated successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message || error });
    }
};

const getProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const data = await productService.getProducts(req.user, page, limit);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message || error });
    }
};

module.exports = {
    create,
    updateQuantity,
    getProducts
}