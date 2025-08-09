const validateUserAuth = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !username.trim() || !password || !password.trim()) {
        return res.status(400).json({
            err: 'Username or password is missing or empty'
        });
    }

    next();
};

const validateProductData = (req, res, next) => {
    const { name, type, sku, image_url, description, quantity, price } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).json({ err: 'Product name is required' });
    }
    if (!sku || !sku.trim()) {
        return res.status(400).json({ err: 'SKU is required' });
    }
    if (quantity === undefined || quantity === null || quantity < 0) {
        return res.status(400).json({ err: 'Quantity must be a non-negative number' });
    }
    if (price === undefined || price === null || price < 0) {
        return res.status(400).json({ err: 'Price must be a non-negative number' });
    }

    next();
};

const validateQuantity = (req, res, next) => {
    const { quantity } = req.body;
    if (quantity === undefined || quantity === null || isNaN(quantity)) {
            return res.status(400).json({ message: 'Quantity must be a valid number' });
        }
    next();
};

module.exports = {
    validateUserAuth,
    validateProductData,
    validateQuantity
}