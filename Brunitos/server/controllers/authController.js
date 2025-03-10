const renderAuth = (req, res) => {
    res.render('auth');   
};


const renderRegister = (req, res) => {
    res.render('register');   
};


const renderResetPSW = (req, res) => {
    res.render('reset_psw');   
};


module.exports = {
    renderAuth,
    renderRegister,
    renderResetPSW
};