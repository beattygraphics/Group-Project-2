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
  {
    question: 'What are the main features of OOPs?',
    answer: 'a new objectInheritance, Encapsulation, Polymorphism, Data Abstraction'
  },
  {
    question: 'What is Polymorphism?',
    answer: 'Polymorphism refers to something that has many shapes. In OOPs, Polymorphism refers to the process by which some code, data, method, or object behaves differently under different circumstances or contexts'
  },
  {
    question: 'What is meant by Inheritance?',
    answer: '“inheritance” means “receiving some quality or behavior from a parent to an offspring.” In object-oriented programming, inheritance is the mechanism by which an object or class (referred to as a child) is created using the definition of another object or class (referred to as a parent).'
  },
  {
    question: 'What is a constructor?',
    answer: 'Constructors are special methods whose name is the same as the class name. The constructors serve the special purpose of initializing the objects.'
  },
];

const seedOopCards = () => Card.bulkCreate(oopCardData);

module.exports = seedOopCards;