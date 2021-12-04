const { mcvCards } = require('../server');

const mvcCardData = [
  {
    id: 'MVC Question',
    question: 'What is one way a website can store data in a users browser?',
    answer: 'Cookies'
  },
  {
    id: 'MVC Question',
    question: '',
    answer: ''
  },
  {
    id: 'MVC Question',
    question: '',
    answer: ''
  },
  {
    id: 'MVC Question',
    question: '',
    answer: ''
  }
];

const seedMvcCards = () => Cards.bulkCreate(mvcCardData);

module.exports = seedMvcCards;