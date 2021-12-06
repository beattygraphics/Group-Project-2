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
    question: 'What does REST stand for?',
    answer: 'Representational State Transfer'
  },
  {
    question: 'Name an API testing app?',
    answer: 'Insomnia, Postman, ReadyAPI, JMeter, REST_Assured'
  },
  {
    question: 'What are the most popular ways to represent a resource in REST?',
    answer: 'XML and JSON are the most popular representations of resources in REST'
  },
];

const seedApiCards = () => Card.bulkCreate(apiCardData);

module.exports = seedApiCards;