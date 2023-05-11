const Admin = require("../models/Admin")
const bcrypt  = require("bcryptjs")
const jwt = require("jsonwebtoken")

const registerr = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }

        let admin = new Admin ({
            name:req.body.name,
            email:req.body.email,
            password: hashedPass
        })
        admin.save()
        .then(admin => {
            res.json({
                message:'User Added Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message:'An error occured!'
            })
        })

    })

}


const loginn = (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;
    
    Admin.findOne({ email: email })
      .then(admin => {
        if (admin ) {
          bcrypt.compare(password, admin.password, function(err, result) {
            if (err) {
              res.json({
                error: err
              });
            } else if (result) {
              let token = jwt.sign({ name: admin.name }, 'verySecretValue', { expiresIn: '1h' });
              res.json({
                message: 'Login Successful!',
                email: admin.email,
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

module.exports = {
     loginn, registerr
}

