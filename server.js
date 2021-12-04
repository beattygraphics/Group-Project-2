const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
// const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Session stuff that will be used later
// const sess = {
//     secret: 'Super secret secret', // TODO: Lookup a package that can handle random secret gen
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize,
//     }),
// };

// app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Use once sequelize is set up
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}. Visit http://localhost:${PORT} now!`)
);