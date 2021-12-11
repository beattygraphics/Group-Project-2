const { CardCategory } = require('../models');

const cardCategoryData = [
  {
    card_id: 1,
    category_id: 1
  },
  {
    card_id: 2,
    category_id: 1
  },
  {
    card_id: 3,
    category_id: 1
  },
  {
    card_id: 4,
    category_id: 1
  },
  {
    card_id: 5,
    category_id: 1
  },
  {
    card_id: 6,
    category_id: 2
  },
  {
    card_id: 7,
    category_id: 2
  },
  {
    card_id: 8,
    category_id: 2
  },
  {
    card_id: 9,
    category_id: 2
  },
  {
    card_id: 10,
    category_id: 2
  },
  {
    card_id: 11,
    category_id: 3
  },
  {
    card_id: 12,
    category_id: 3
  },
  {
    card_id: 13,
    category_id: 3
  },
  {
    card_id: 14,
    category_id: 3
  },
  {
    card_id: 15,
    category_id: 3
  },
  {
    card_id: 16,
    category_id: 4
  },
  {
    card_id: 17,
    category_id: 4
  },
  {
    card_id: 18,
    category_id: 4
  },
  {
    card_id: 19,
    category_id: 4
  },
  {
    card_id: 20,
    category_id: 5
  },
  {
    card_id: 21,
    category_id: 5
  },
  {
    card_id: 22,
    category_id: 5
  },
  {
    card_id: 23,
    category_id: 5
  },
  {
    card_id: 24,
    category_id: 5
  },
  {
    card_id: 25,
    category_id: 6
  },  
  {
    card_id: 26,
    category_id: 6
  },
  {
    card_id: 27,
    category_id: 6
  },
  {
    card_id: 28,
    category_id: 6
  },
  {
    card_id: 29,
    category_id: 7
  },
  {
    card_id: 30,
    category_id: 7
  },
  {
    card_id: 31,
    category_id: 7
  },
  {
    card_id: 32,
    category_id: 7
  },
  {
    card_id: 33,
    category_id: 7
  },
  {
    card_id: 34,
    category_id: 7
  },
  {
    card_id: 35,
    category_id: 8
  },
  {
    card_id: 36,
    category_id: 8
  },
  {
    card_id: 37,
    category_id: 8
  },
  {
    card_id: 38,
    category_id: 8
  },
  {
    card_id: 39,
    category_id: 8
  },
  {
    card_id: 40,
    category_id: 9
  },
  {
    card_id: 41,
    category_id: 9
  },
  {
    card_id: 42,
    category_id: 9
  },
  {
    card_id: 43,
    category_id: 9
  },
  {
    card_id: 44,
    category_id: 8
  },
  {
    card_id: 45,
    category_id: 10
  },
  {
    card_id: 46,
    category_id: 10
  },
  {
    card_id: 47,
    category_id: 10
  },
  {
    card_id: 48,
    category_id: 10
  },
  {
    card_id: 49,
    category_id: 9
  },
  {
    card_id: 50,
    category_id: 9
  },
  {
    card_id: 51,
    category_id: 9
  },
  {
    card_id: 52,
    category_id: 9
  },
  {
    card_id: 53,
    category_id: 9
  },
  {
    card_id: 54,
    category_id: 10
  }
];

const seedCardCategory = () => CardCategory.bulkCreate(cardCategoryData);

module.exports = seedCardCategory;