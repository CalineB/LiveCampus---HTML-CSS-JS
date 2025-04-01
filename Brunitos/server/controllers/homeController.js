const db = require("../models");

const renderHome = (req, res) => {
    res.render('brunitos_index');   
};

const renderAbout = (req, res) => {
    res.render('about');   
};

const renderProfile = (req, res) => {
    res.render('profile');   
};


module.exports = {
    renderAbout,
    renderHome,
    renderProfile
};