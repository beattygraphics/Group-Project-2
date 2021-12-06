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
];

const seedOrmCards = () => Card.bulkCreate(ormCardData);

module.exports = seedOrmCards;