const { Card } = require('../models');

const mvcCardData = [
  {
    question: 'What is one way a website can store data in a users browser?',
    answer: 'Cookies'
  },
  {
    question: 'Handlebars is what kind of engine?',
    answer: 'a Templating engine'
  },
  {
    question: 'How do you drop a value in your contect into your temnplate?',
    answer: 'double curly braces'
  },
  {
    question: 'What is the difference between a scession and a cookie?',
    answer: 'cookies are stores on the Server-sie, and Cookies are storesd in the browser'
  }
];

const seedMvcCards = () => Card.bulkCreate(mvcCardData);

module.exports = seedMvcCards;