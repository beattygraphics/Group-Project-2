const { Card } = require('../models');

const oopCardData = [
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

const seedOopCards = () => Card.bulkCreate(oopCardData);

module.exports = seedOopCards;