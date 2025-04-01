/*require('dotenv').config();
const debug = require('debug')('app:server');
const cors = require('cors');

const express = require('express');
const session = require('express-session');
const path = require('path')
const app = express();

app.use(cors({ origin: '*' }));

// app runs on .env variable or default PORT
const port = process.env.PORT || 'http://localhost:3000'; 


// require router file
const router = require('./server/routes');

app.use(cors({ origin: '*' }));

// send bodies in json format
app.use(express.json());

// Vues autres serveurs 
app.set('views', path.join(__dirname, 'views'));

// Configure EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './public/views');


app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(express.static(path.join(__dirname, './public/views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/script', express.static('script'));


// Session middleware
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}/brunitos`);
});
*/