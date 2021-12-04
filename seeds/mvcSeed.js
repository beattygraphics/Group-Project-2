const { Card } = require('../models');

const mvcCardData = [
  {
    question: 'What is one way a website can store data in a users browser?',
    answer: 'Cookies'
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
  }
];

const seedMvcCards = () => Card.bulkCreate(mvcCardData);

module.exports = seedMvcCards;