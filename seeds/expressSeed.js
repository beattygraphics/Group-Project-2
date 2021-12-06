const { Card } = require('../models');

const expressCardData = [
  {
    question: 'What is the express middleware that marks a directory in the file system for servinc static files for the app.',
    answer: 'static'
  },
  {
    question: 'What is the Express Middlewares available for the apps routing system',
    answer: 'router'
  },
  {
    question: 'What is the Express Middle ware for handeling erros and should be added AFTER the router middleware?',
    answer: 'errorHandler'
  },
  {
    question: 'What Are URL schema, which describe the interfaces for making requests to you web app. Combining an HTTP request method and a path pattern, you define URLs in your app?',
    answer: 'Routes'
  },
  {
    question: 'What is Express?',
    answer: 'Express, is a back end web application framework for Node.js'
  },
];

const seedExpressCards = () => Card.bulkCreate(expressCardData);

module.exports = seedExpressCards;