const { User } = require('../models');

const userData = [
  {
    id: 1,
    first_name: 'Fake',
    last_name: 'Name',
    email: 'FakeName@whatthehell.com ',
    password:''
  },
  {
    id: 2,
    first_name: 'Jeckel',
    last_name: 'Hyde',
    email: 'JeckelandHyde@randomemailaddress.com',
    password:''
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;