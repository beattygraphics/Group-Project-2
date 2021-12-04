const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName:'card',
    }
);

module.exports = Card;
