const { DataTypes } = require('sequelize');
const sqlize = require('../config/init-mysql');

const userForm = sqlize.define(
    'user_forms',
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(75),
            allowNull: false,
        },
        number: {
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
);

module.exports = userForm;
