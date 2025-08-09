const { User } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');

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

    async signIn(payload) {
        try {
            const user = await this.getByUsername(payload.username);
            const passwordMatch = this.checkPassword(payload.password, user.password);
            if (!passwordMatch) {
                throw new Error('Wrong Password');
            }
            const newJWT = this.createToken({ username: user.username, id: user.id });
            return newJWT;
        } catch (error) {
            if (error.name == 'AttributeNotFound') {
                throw new Error('Wrong username');
            }
            console.log("Something went wrong in the Sign In process");
            throw error;
        }
    }

    async getByUsername(username) {
        try {
            const user = await User.findOne({
                where: {
                    username: username
                }
            });
            if (!user) {
                throw new Error(
                    'Wrong username'
                );
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }

    createToken (user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in Token creation");
            throw error;
        }
    }
}

module.exports = UserService;