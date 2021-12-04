const { Card } = require('../models');

const expressCardData = [
  {
    id: 'Express Question',
    question: '',
    answer: ''
  },
  {
    id: 'Express Question',
    question: '',
    answer: ''
  },
  {
    id: 'Express Question',
    question: '',
    answer: ''
  },
  {
    id: 'Express Question',
    question: '',
    answer: ''
  },
];

const seedExpressCards = () => Card.bulkCreate(expressCardData);

module.exports = seedExpressCards;