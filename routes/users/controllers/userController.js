const User = require('../models/User');
const { validationResult } = require('express-validator');

module.exports = {
  register: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    User.findOne({ email: req.body.email }).then(user => {
      if (user) return console.log(`User exists`);
      else {
        const newUser = new User();

        newUser.profile.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.email;

        newUser
          .save()
          .then(user => {
            if (user) {
              return res.status(200).json({ message: 'success', user });
            }
          })
          .catch(err => next(err));
      }
    });
  }

  // register: async (req, res, next) => {
  //   const errors = validationResult(req);
  //   const { name, email, password } = req.body;

  //   if (!errors.isEmpty()) {
  //     return res.status(422).json({ errors: errors.array() });
  //   }
  //   let user = await User.findOne({ email });

  //   try {
  //     if (user) {
  //       return res.status(500).json({ message: 'User already exists' });
  //     }
  //     user = await User.create({
  //       ['profile.name']: name,
  //       email,
  //       password
  //     });

  //     return res.json({ message: 'Success', user });
  //   } catch (error) {
  //     return next(error);
  //   }
  // }
};
