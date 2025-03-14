const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(cors({ origin: '*' }));


// Définir le moteur de template
app.set('view engine', 'ejs');

// CSS et medias
app.use(express.static(path.join(__dirname, 'public')));


// Route pour la page d'accueil UX-IX (en dehors de views/)
app.get('/uxui-restaurants', (req, res) => {
    res.render(path.join(__dirname, 'index'));
});

app.get("/boissons", (req, res) => {
    res.render(path.join(__dirname, "drinks"));
});


const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}/uxui-restaurants`);
});
