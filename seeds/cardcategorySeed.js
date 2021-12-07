const { CardCategory } = require('../models');

const cardCategoryData = [
  {
    card_id: 1,
    category_id: 1
  // },
  // {
  //   card_id: 2,
  //   category_id: 2
  // },
  // {
  //   card_id: 3,
  //   category_id: 3
  // },
  // {
  //   card_id: 4,
  //   category_id: 4
  // },
  // {
  //   card_id: 5,
  //   category_id: 5
  // },
  // {
  //   card_id: 6,
  //   category_id: 6
  // },
  // {
  //   card_id: 7,
  //   category_id: 7
  // },
  // {
  //   card_id: 8,
  //   category_id: 8
  // },
  // {
  //   card_id: 9,
  //   category_id: 9
  // },
  // {
  //   card_id: 10,
  //   category_id: 10
  },
];

const seedCardCategory = () => CardCategory.bulkCreate(cardCategoryData);

module.exports = seedCardCategory;