const { Html } = require('../server');

const htmlCardData = [
  {
    id: 'HTML Question',
    question: 'What data is contained in the head tag?',
    answer: 'meta data invisible to users'
  },
  {
    id: 'HTML Question',
    question: 'This HTML tag breaks up logical groupings of information?',
    answer: 'section tags'
  },
  {
    id: 'HTML Question',
    question: 'What element is a complement for the header element and represents the bottom of a content area?',
    answer: 'footer'
  },
  {
    id: 'HTML Question',
    question: '',
    answer: ''
  },
];

const seedHtmlCards = () => Cards.bulkCreate(htmlCardData);

module.exports = seedHtmlCards;