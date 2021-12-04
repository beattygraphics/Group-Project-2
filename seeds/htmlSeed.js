const { htmlCards } = require('../server');

const htmlCardData = [
  {
    card_ID: 'HTML Question',
    question: 'What data is contained in the head tag?',
    answer: 'meta data invisible to users',
    question_id: 1,
  },
  {
    card_ID: 'HTML Question',
    question: 'This HTML tag breaks up logical groupings of information?',
    answer: 'section tags',
    question_id: 2,
  },
  {
    card_ID: 'HTML Question',
    question: 'What element is a complement for the header element and represents the bottom of a content area?',
    answer: 'footer',
    question_id: 3,
  },
  {
    card_ID: 'HTML Question',
    question: '',
    answer: '',
    question_id: 4,
  },
];

const seedHtmlCards = () => Cards.bulkCreate(htmlCardData);

module.exports = seedHtmlCards;