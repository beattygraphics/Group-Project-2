const { nodeCards } = require('../server');

const nodeCardData = [
  {
    card_ID: 'Node Question',
    question: 'What is NPM?',
    answer: 'Its an online repo for publishing of open source Nodejs projects',
    question_id: 1,
  },
  {
    card_ID: 'Node Question',
    question: 'What is a package?',
    answer: 'A package is a bit of reusable code. Its a directory with one or more files in it',
    question_id: 2,
  },
  {
    card_ID: 'Node Question',
    question: 'How do you create a package.json with npm?',
    answer: 'Type the command "npm init" in the terminal',
    question_id: 3,
  },
  {
    card_ID: 'Node Question',
    question: 'How do you create a package.json with npm?',
    answer: 'Type the command "npm init" in the terminal',
    question_id: 4,
  },
  {
    card_ID: 'Node Question',
    question: 'What is Node.js?',
    answer: 'a Javascript Runtime',
    question_id: 5,
  },
  {
    card_ID: 'Node Question',
    question: '',
    answer: '',
    question_id: 6,
  },
];

const seedNodeCards = () => Cards.bulkCreate(nodeCardData);

module.exports = seedNodeCards;