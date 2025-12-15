const User = require('../models/userModel');

const indexrenderer = (req, res) => {
  res.render('index');
};

const vislogginsidee = (req, res) => {
  res.render('logg-in');
};

const logginnBruker = async (req, res) => {
  const { brukernavn, passord } = req.body;

  if (!brukernavn || !passord) {
    return res.status(400).send('Mangler brukernavn eller passord');
  }

  const bruker = await User.findOne({ brukernavn });

  if (!bruker) {
    const nyBruker = new User({ brukernavn, passord });
    await nyBruker.save();
    return res.redirect('/');
  }

  return res.status(400).send('Brukernavn er allerede tatt');
};

module.exports = {
  indexrenderer,
  vislogginsidee,
  logginnBruker,
};
