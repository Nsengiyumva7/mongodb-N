const User = require("../models/User")
const bcrypt  = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = (req, res, next) => {
  const { name, email, password } = req.body;

  // Check if email or password is empty
  if (!email || !password) {
    return res.json({ message: 'Email and password are required' });
  }

  bcrypt.hash(password, 10, function(err, hashedPass) {
    if (err) {
      return res.json({ error: err });
    }

    let user = new User({
      name: name,
      email: email,
      password: hashedPass
    });

    user
      .save()
      .then(user => {
        res.json({ message: 'User Added Successfully!' });
      })
      .catch(error => {
        res.json({ message: 'An error occurred!' });
      });
  });
};


const login = (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;
    
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          bcrypt.compare(password, user.password, function(err, result) {
            if (err) {
              res.json({
                error: err
              });
            } else if (result) {
              let token = jwt.sign({ name: user.name }, 'verySecretValue', { expiresIn: '1h' });
              res.json({
                message: 'Login Successful!',
                email: user.email,
                token
              });
            } else {
              res.status(401).json({
                message: 'Invalid credentials. Password does not match.'
              });
            }
          });
        } else {
          res.status(404).json({
            message: 'User not found!'
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        });
      });
  };
  
  const logout = (req, res, next) => {
    // Destroy the user session
    // For example, using the `destroy` method of Express session middleware
  
    req.session.destroy((err) => {
      if (err) {
        res.json({ message: 'An error occurred during logout' });
      } else {
        res.json({ message: 'Logout successful!' });
      }
    });
  };

module.exports = {
    register, login, logout
}

