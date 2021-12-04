const { Card } = require('../models');

const jsCardData = [
  {
    question: 'What is the full name for CSS?',
    answer: 'Cascading Style Sheets'
  },
  {
    question: 'What is CSS used for?',
    answer: 'Its the code that defines the visual presentation of a webpage'
  },
  {
    question: 'What CSS syntax defines which part of an element should be styled (example: color, size, position)?',
    answer: 'Property'
  },
  {
    question: 'What allows you to add style with CSS?',
    answer: 'Style tags'
  },
  {
    question: 'What is the HTML element that you use to apply a style tag to?',
    answer: 'CSS Selector'
  },
];

const seedJsCards = () => Card.bulkCreate(jsCardData);

module.exports = seedCards;