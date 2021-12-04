const { CardCategory } = require('../models');

const cardCategoryData = [
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
  {
    card_id: ,
    category_id:
  },
];

const seedCardCategory = () => CardCategory.bulkCreate(cardCategoryData);

module.exports = seedCardCategory;