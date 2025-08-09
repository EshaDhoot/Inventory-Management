const { User } = require('../models/index');

class UserService {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                throw new Error('Username already exists');
            }
            console.log("Something went wrong on service layer");
            throw error;
        }
    }
}

module.exports = UserService;