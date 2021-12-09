const { Card } = require('../models');

const oopCardData = [
  {
    question: 'What does OOP stand for?',
    answer: 'Object-Oriented Paradigm'
  },
  {
    question: 'What does Poymorphism do?',
    answer: 'Provides an ability to call the same method on different Javascript objects'
  },
  {
    question: 'What are the 3 states of a Promise?',
    answer: 'Pending, Fulfilled. Rejected'
  },
  {
    question: 'What are Constructors in JavaScript?',
    answer: 'A function that creates an instance of a class'
  },
  {
    question: 'What is a class?',
    answer: 'A template from which objects are created and In JavaScript, a class is a kind of a function'
  },
  {
    question: '"this" in classes refers to?',
    answer: 'a new object'
  },
];

const seedOopCards = () => Card.bulkCreate(oopCardData);

module.exports = seedOopCards;