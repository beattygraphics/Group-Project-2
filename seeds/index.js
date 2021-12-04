const seedCss = require('./cssSeed');
const seedExpress = require('./expressSeed');
const seedHtml = require('./htmlSeed');
const seedMvc = require('./mvcSeed');
const seedNode = require('./nodeSeed');
const seedSql = require('./sqlSeed');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCss();
  console.log('\n-----CSS SEEDED -----\n');

  await seedExpress();
  console.log('\n----- EXPRESS SEEDED -----\n');

  await seedHtml();
  console.log('\n----- HTML SEEDED -----\n');

  await seedMvc();
  console.log('\n----- MVC SEEDED -----\n');

  await seedNode();
  console.log('\n----- NODE SEEDED -----\n');

  await seedSql();
  console.log('\n----- SQL SEEDED -----\n');

  process.exit(0);
};

seedAll();