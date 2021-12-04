const { Card } = require('../models');

const ormCardData = [
  {
    question: '',
    answer: ''
  },
  {
    question: '',
    answer: ''
  },
  {
    question: '',
    answer: ''
  },
  {
    question: '',
    answer: ''
  },
  {
    question: '',
    answer: ''
  },
];

const seedOrmCards = () => Card.bulkCreate(ormCardData);

module.exports = seedOrmCards;