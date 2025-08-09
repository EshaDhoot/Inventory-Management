const { Product } = require('../models/index');

class ProductService {
    async create(data) {
        try {
            const product = await Product.create(data);
            return product;
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                throw new Error('SKU already exists');
            }
            throw error;
        }
    }

    async updateQuantity(id, quantity) {
        const product = await Product.findByPk(id);
        if (!product) return null;

        product.quantity = quantity;
        await product.save();

        return product;
    };
}

module.exports = ProductService;