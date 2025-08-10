'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
const { SALT } = require('../config/serverConfig')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // One user can have many products
      User.hasMany(models.Product, {
        foreignKey: 'userId',
        as: 'products',
      });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',       
    freezeTableName: true 
  });
  User.beforeCreate((user) => {
      const encryptedPassword = bcrypt.hashSync(user.password, SALT);
      user.password = encryptedPassword;
  })
  return User;
};