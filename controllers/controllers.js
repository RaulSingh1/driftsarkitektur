const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

/* =========================
   CREATE ACCOUNT (REGISTER)
   ========================= */
exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.send('Bruker finnes allerede');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword
    });

    await user.save();
    res.redirect('/logg-in');
  } catch (err) {
    console.error(err);
    res.send('Feil ved registrering');
  }
};

/* =================
   LOGIN (IKKE CREATE)
   ================= */
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.send('Bruker finnes ikke');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send('Feil passord');
    }

    // OK login
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.send('Feil ved innlogging');
  }
};
