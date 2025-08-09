const UserService = require('../services/user-service');
const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create(req.body);
        return res.status(201).json({
            message: 'Successfully created a new user',
            success: true,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong, unable to create a new user",
            data: {},
            success: false,
            error: error.message || error
        });
    }
}

module.exports = {
    create
}