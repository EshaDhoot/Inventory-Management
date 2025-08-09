const UserService = require('../services/user-service');
const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create(req.body);
        return res.status(201).json({
            message: 'Successfully created a new user'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body);
        return res.status(200).json({
            access_token: response,
        });
    } catch (error) {
        if(error.message === 'Wrong Password' || error.message === 'Wrong username') {
            return res.status(401).json({
                message: error.message || 'Wrong Username or Password'
            });
        }
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    create,
    signIn
}