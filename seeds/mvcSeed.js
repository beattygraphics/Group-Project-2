const { mcvCards } = require('../server');

const mvcCardData = [
  {
    card_ID: 'MVC Question',
    question: '',
    answer: '',
    question_id: 1,
  },
  {
    card_ID: 'MVC Question',
    question: '',
    answer: '',
    question_id: 2,
  },
  {
    card_ID: 'MVC Question',
    question: '',
    answer: '',
    question_id: 3,
  },
  {
    card_ID: 'MVC Question',
    question: '',
    answer: '',
    question_id: 4,
  },
];

const seedMvcCards = () => Cards.bulkCreate(mvcCardData);

module.exports = seedMvcCards;