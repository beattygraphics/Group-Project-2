const User = require('./User');
const Card = require('./Card');
const Category = require('./Category');
const CardCategory = require('./CardCategory');

// User can have many categories
// but category can belong to none or one User
// Reflects Users having a Favorites Category
// And potentially creating more
User.hasMany(Category, {
    foreignKey: 'user_id',
});

Category.belongsTo(User, {
    foreignKey: 'used_id',
});

// Many to many relationship between Card and Category
Card.belongsToMany(Category, {
    through: {
        model: CardCategory,
        unique: false,
    },
    as: 'cards_categories',
});

Category.belongsToMany(Card, {
    through: {
        model: CardCategory,
        unique: false,
    },
    as: 'cards_in_category',
});

module.exports = { User, Card, Category, CardCategory };
