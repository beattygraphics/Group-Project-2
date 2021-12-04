const { Card } = require('../models');

const apiCardData = [
  {
    question: 'What does API stand for?',
    answer: 'Application Programming Interface'
  },
  {
    question: 'What are some architectural styles for creating a Web API?',
    answer: 'HTML, XML/JSON, Simple URI'
  },
  {
    question: 'Who can use a Web API?',
    answer: 'Web API can be consumed by any client which supports HTML verbs such as GET, PUT, DELETE, and POST'
  },
  {
    question: 'What is API testing?',
    answer: 'Style tags'
  },
  {
    question: 'Name an API testing app?',
    answer: 'Insomnia, Postman, ReadyAPI, JMeter, REST_Assured'
  },
];

const seedApiCards = () => Card.bulkCreate(apiCardData);

module.exports = seedApiCards;