const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');
// const {signedCookie} = require("cookie-parser");

const User = require("../Models/user");
const Role = require("../Models/role");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {authPage} = require("../_helpers/middleware");

// router.post('/authenticate', authenticate);
// router.post('/login', async (req, res) => {
//   const user = await User.findOne({username: req.body.username})
//
//   if (!user) {
//     return res.status(404).send({
//       message: 'user not found'
//     })
//   }
//
//   if (!await bcrypt.compare(req.body.password, user.hash)) {
//     return res.status(400).send({
//       message: 'invalid credentials'
//     })
//   }
//
//   const token = jwt.sign({_id: user._id}, "rigo")
//   const refreshtoken = jwt.sign({_id: user._id}, "refreshrigo")
//
//   res.cookie('jwt', refreshtoken, {
//     httpOnly: true,
//     maxAge: 24 * 60 * 60 * 1000 // 1 day
//   })
//
//   res.send({...user.toJSON(),
//     message: 'success'
//   })
// })
// router.post('/register', register);

router.get('/', authPage(["62bf9a8b80ef98715c71ae1f"]), getAll);
router.get('/current',authPage(["62bf9a8b80ef98715c71ae1f"]), getCurrent);
router.get('/:id',authPage(["62bf9a8b80ef98715c71ae1f"]), getById);
router.put('/:id',authPage(["62bf9a8b80ef98715c71ae1f"]), update);
router.delete('/:id',authPage(["62bf9a8b80ef98715c71ae1f"]), _delete);
router.post('/recherche_or', authPage(["62bf9a8b80ef98715c71ae1f"]),function(req, res, next) {
  var username= req.body.username;
  var email= req.body.email
   var myquery = { $or :[{username:username} , {email:email}] };
  User.find(myquery,function (err,data){
    // dont work return erreur
         if(!User) throw res.status(404).send({message: 'user not found'});
          res.json(data);
       }
   )

});
router.post('/recherche_and', authPage(["62bf9a8b80ef98715c71ae1f"]),function(req, res, next) {
  var username= req.body.username;
  var email= req.body.email
    var myquery = { $and :[{username:username , email:email}] };
  User.find(myquery,function (err,data){
    // dont work return erreur
         if(!User) throw res.status(404).send({message: 'user not found'});
          res.json(data);
       }
   )

});
module.exports = router;

// async function authenticate(req, res, next) {
//   userService.authenticate(req.body, res)
//       .then(user => user ? res.json(user) : res.status(400).json({message: 'Username or password is incorrect'}))
//       .catch(err => next(err));
//   const user = await User.findOne({username: req.body.username})
//
//   const token = jwt.sign({_id: user._id}, "rigo")
//
//   res.cookie('jwt', token, {
//     httpOnly: true,
//     maxAge: 24 * 60 * 60 * 1000 // 1 day
//   })
//
//
// }

// function register(req, res, next) {
//   userService.create(req.body)
//       .then(() => res.json({message:"success registration !!"}))
//       .catch(err => next(err));
// }

function getAll(req, res, next) {
  userService.getAll(req)
      .then(users => res.json(users))
      .catch(err => next(err));
}

function getCurrent(req, res, next) {
  userService.getById(req.user.sub)
      .then(user => user ? res.json(user) : res.sendStatus(404))
      .catch(err => next(err));
}

function getById(req, res, next) {
  userService.getById(req.params.id)
      .then(user => user ? res.json(user) : res.sendStatus(404))
      .catch(err => next(err));
}

function update(req, res, next) {
  userService.update(req.params.id, req.body)
      .then(() => res.json({message:"user updated !!"}))
      .catch(err => next(err));
}

function _delete(req, res, next) {
  userService.delete(req.params.id)
      .then(() => res.json({message:"user deleted !!"}))
      .catch(err => next(err));
}