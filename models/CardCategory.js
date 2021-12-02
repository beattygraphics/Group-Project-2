const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CardCategory extends Model {}

CardCategory.init(
    {
        card_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        card_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        modelName: 'card_category',
    }
);

module.exports = CardCategory;
