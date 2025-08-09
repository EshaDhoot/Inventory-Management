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

    async getProducts(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const { count, rows } = await Product.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']]
        });

        return {
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            products: rows
        };
    }
}

module.exports = ProductService;