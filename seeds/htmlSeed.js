const { Card } = require('../models');

const htmlCardData = [
  {
    question: 'What data is contained in the head tag?',
    answer: 'meta data invisible to users'
  },
  {
    question: 'This HTML tag breaks up logical groupings of information?',
    answer: 'section tags'
  },
  {
    question: 'What element is a complement for the header element and represents the bottom of a content area?',
    answer: 'footer'
  },
  {
    question: 'what tag indicates the beginning of a new paragraph?',
    answer: '<p></p>'
  },
  {
    question: 'Name 5 Examples of HTML element Tags',
    answer: 'head, body, img, src, p, a'
  },
];

const seedHtmlCards = () => Card.bulkCreate(htmlCardData);

module.exports = seedHtmlCards;