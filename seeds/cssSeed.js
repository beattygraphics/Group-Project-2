const { Css } = require('../server');

const cssCardData = [
  {
    id: 'CSS Question',
    question: 'What is the full name for CSS?',
    answer: 'Cascading Style Sheets'
  },
  {
    id: 'CSS Question',
    question: 'What is CSS used for?',
    answer: 'Its the code that defines the visual presentation of a webpage'
  },
  {
    iD: 'CSS Question',
    question: 'What CSS syntax defines which part of an element should be styled (example: color, size, position)?',
    answer: 'Property'
  },
  {
    id: 'CSS Question',
    question: 'What allows you to add style with CSS?',
    answer: 'Style tags'
  },
  {
    id: 'CSS Question',
    question: 'What is the HTML element that you use to apply a style tag to?',
    answer: 'CSS Selector'
  },
];

const seedCssCards = () => Cards.bulkCreate(cssCardData);

module.exports = seedCssCards;