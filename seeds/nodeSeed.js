const { Node } = require('../server');

const nodeCardData = [
  {
    id: 'Node Question',
    question: 'What is NPM?',
    answer: 'Its an online repo for publishing of open source Nodejs projects'
  },
  {
    id: 'Node Question',
    question: 'What is a package?',
    answer: 'A package is a bit of reusable code. Its a directory with one or more files in it'
  },
  {
    id: 'Node Question',
    question: 'How do you create a package.json with npm?',
    answer: 'Type the command "npm init" in the terminal'
  },
  {
    id: 'Node Question',
    question: 'How do you create a package.json with npm?',
    answer: 'Type the command "npm init" in the terminal'
  },
  {
    id: 'Node Question',
    question: 'What is Node.js?',
    answer: 'a Javascript Runtime'
  },
  {
    id: 'Node Question',
    question: '',
    answer: ''
  },
];

const seedNodeCards = () => Cards.bulkCreate(nodeCardData);

module.exports = seedNodeCards;