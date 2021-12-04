const { expressCards } = require('../server');

const expressCardData = [
  {
    card_ID: 'Express Question',
    question: '',
    answer: '',
    question_id: 1,
  },
  {
    card_ID: 'Express Question',
    question: '',
    answer: '',
    question_id: 2,
  },
  {
    card_ID: 'Express Question',
    question: '',
    answer: '',
    question_id: 3,
  },
  {
    card_ID: 'Express Question',
    question: '',
    answer: '',
    question_id: 4,
  },
];

const seedExpressCards = () => Cards.bulkCreate(expressCardData);

module.exports = seedExpressCards;