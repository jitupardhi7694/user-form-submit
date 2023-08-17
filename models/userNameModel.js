const { DataTypes } = require('sequelize');
const sqlize = require('../config/init-mysql');

const userName = sqlize.define(
    'user_names',
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    },
    {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
);

module.exports = userName;
