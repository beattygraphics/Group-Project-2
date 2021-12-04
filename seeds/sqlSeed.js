const { cssCards } = require('../server');

const cssCardData = [
  {
    card_ID: 'CSS Question',
    question: 'What is the full name for CSS?',
    answer: 'Cascading Style Sheets',
    question_id: 1,
  },
  {
    card_ID: 'CSS Question',
    question: 'What is CSS used for?',
    answer: 'Its the code that defines the visual presentation of a webpage',
    question_id: 2,
  },
  {
    card_ID: 'CSS Question',
    question: 'What CSS syntax defines which part of an element should be styled (example: color, size, position)?',
    answer: 'Property',
    question_id: 3,
  },
  {
    card_ID: 'CSS Question',
    question: 'What allows you to add style with CSS?',
    answer: 'Style tags',
    question_id: 4,
  },
  {
    card_ID: 'CSS Question',
    question: 'What is the HTML element that you use to apply a style tag to?',
    answer: 'CSS Selector',
    question_id: 4,
  },
];

const seedCssCards = () => Cards.bulkCreate(cssCardData);

module.exports = seedCssCards;