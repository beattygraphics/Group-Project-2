const { Sql } = require('../server');

const sqlCardData = [
  {
    id: 'SQL Question',
    question: 'What is a statement that retrieves data from the database?',
    answer: 'A Select Statement'
  },
  {
    id: 'SQL Question',
    question: 'What 2 clauses are mandatory in a Select statement?',
    answer: 'SELECT and FROM'
  },
  {
    id: 'SQL Question',
    question: 'What Clause acts as a filter in a select statement and specifies the return as either true or false?',
    answer: 'A WHERE Clause'
  },
  {
    id: 'SQL Question',
    question: 'How can you show all columns of a table names MyTable?',
    answer: 'Select * FROM MyTable'
  },
  {
    id: 'SQL Question',
    question: 'What is the HTML element that you use to apply a style tag to?',
    answer: 'CSS Selector'
  },
];

const seedSqlCards = () => Cards.bulkCreate(sqlCardData);

module.exports = seedSqlCards;