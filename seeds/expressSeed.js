const { Express } = require('../server');

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

const seedExpressCards = () => Cards.bulkCreate(expressCardData);

module.exports = seedExpressCards;