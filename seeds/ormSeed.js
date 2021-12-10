const { Card } = require('../models');

const ormCardData = [
  {
    question: 'How would we query for a user with an id of 5?',
    answer: 'User.findByPk(5)'
  },
  {
    question: 'What method do we use in Sequelize seed files to add multiple records to our database?',
    answer: 'bulkInsert'
  },
  {
    question: 'what is the asynchronous process?',
    answer: 'the application can continue with other work that doesnt depend on the web resource until the potentially blocking task finishes'
  },
  {
    question: 'synchronous vs. asynchronous',
    answer: 'Asynchronous programming improves responsiveness, synchronous blocks the flow'
  },
  {
    question: 'When doing a join, the number of columns in the new table is equal to what?',
    answer: 'the sum of the columns in the two tables'
  },
  {
    question: 'What does CRUD stand for?',
    answer: 'Create, Read, Update, Delete'
  },
  {
    question: 'How does password hashing work?',
    answer: 'Hashing turns your password (or any other piece of data) into a short string of letters and/or numbers using an encryption algorithm.'
  },
  {
    question: 'What is a Hook?',
    answer: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components.'
  },
  {
    question: 'How many types of Javascript litterals are there?',
    answer: 'There are four types of literals - string literals, number literals, boolean literals and null literals.'
  },
  {
    question: 'What is ESLint used for?',
    answer: 'ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.'
  },
];

const seedOrmCards = () => Card.bulkCreate(ormCardData);

module.exports = seedOrmCards;