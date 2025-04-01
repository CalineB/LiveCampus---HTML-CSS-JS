const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const brunitos_router = require('./Brunitos/server/routes');
const debug = require('debug')('app:server');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
}));

// ⚡ Définir plusieurs dossiers de vues
app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, 'Brunitos/public/views'),
  path.join(__dirname, 'public/views')
]);

// Servir les fichiers statiques uxui
app.use(express.static(path.join(__dirname, 'public')));


// Servir les fichiers statiques brunitos
app.use('/brunitos', express.static(path.join(__dirname, 'Brunitos/public')));
app.use('/script', express.static('script'));



// Routes spécifiques à la page d'uxui
app.get("/uxui", (req, res) => res.render("index"));
app.get("/boissons", (req, res) => res.render("drinks"));
app.get("/contacts", (req, res) => res.render("contacts"));

// Utilisation des routes
app.use('/brunitos', brunitos_router);

// Route vers brunitos
app.get("brunitos", (req, res) => res.render("brunitos_index"));

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}/uxui`);
});
