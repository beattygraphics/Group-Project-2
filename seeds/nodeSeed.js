const { Card } = require('../models');

const nodeCardData = [
  {
    question: 'What is NPM?',
    answer: 'Its an online repo for publishing of open source Nodejs projects'
  },
  {
    question: 'What is a package?',
    answer: 'A package is a bit of reusable code. Its a directory with one or more files in it'
  },
  {
    question: 'How do you create a package.json with npm?',
    answer: 'Type the command "npm init" in the terminal'
  },
  {
    question: 'How do you create a package.json with npm?',
    answer: 'Type the command "npm init" in the terminal'
  },
  {
    question: 'What is Node.js?',
    answer: 'a Javascript Runtime'
  },
  {
    question: '',
    answer: ''
  },
];

const seedNodeCards = () => Card.bulkCreate(nodeCardData);

module.exports = seedNodeCards;