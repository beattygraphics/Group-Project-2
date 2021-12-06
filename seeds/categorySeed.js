const { Category } = require('../models');

const categoryData = [
  {
    name: 'CSS',
  },
  {
    name: 'EXPRESS',
  },
  {
    name: 'HTML',
  },
  {
    name: 'MVC',
  },
  {
    name: 'NODE',
  },
  {
    name: 'SQL',
  },
  {
    name: 'API',
  },
  {
    name: 'JAVASCRIPT',
  },
  {
    name: 'ORM',
  },
  {
    name: 'OOP',
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;