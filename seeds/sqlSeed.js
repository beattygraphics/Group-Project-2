const { Card } = require('../models');

const sqlCardData = [
  {
    question: 'What is a statement that retrieves data from the database?',
    answer: 'A Select Statement'
  },
  {
    question: 'What 2 clauses are mandatory in a Select statement?',
    answer: 'SELECT and FROM'
  },
  {
    question: 'What Clause acts as a filter in a select statement and specifies the return as either true or false?',
    answer: 'A WHERE Clause'
  },
  {
    question: 'How can you show all columns of a table names MyTable?',
    answer: 'Select * FROM MyTable'
  },
];

const seedSqlCards = () => Card.bulkCreate(sqlCardData);

module.exports = seedSqlCards;