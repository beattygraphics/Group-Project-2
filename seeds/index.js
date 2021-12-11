const seedCategory = require('./categorySeed');
const seedCss = require('./cssSeed');
const seedExpress = require('./expressSeed');
const seedHtml = require('./htmlSeed');
const seedMvc = require('./mvcSeed');
const seedNode = require('./nodeSeed');
const seedSql = require('./sqlSeed');
const seedApi = require('./apiSeed');
const seedJavascript = require('./javascriptSeed');
const seedOop = require('./oopSeed');
const seedOrm = require('./ormSeed');
const seedCardCategory = require('./cardCategorySeed');
const seedUser = require('./userSeed');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategory();
  console.log('\n----- CATEGORY SEEDED -----\n');

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

  await seedApi();
  console.log('\n----- API SEEDED -----\n');

  await seedJavascript();
  console.log('\n----- JAVASCRIPT SEEDED -----\n');

  await seedOrm();
  console.log('\n----- ORM SEEDED -----\n');
  
  await seedOop();
  console.log('\n----- OOP SEEDED -----\n');

  await seedCardCategory();
  console.log('\n----- CARD CATEGORY SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  process.exit(0);
};

seedAll();