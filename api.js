const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const crypto = require('crypto');
const jwt = require('express-jwt');
const passport= require('passport');
require('dotenv').config();
const jwt2 = require('jsonwebtoken');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const authCheck = jwt({
  secret: process.env.SECRET,
  // to make sure the token is recived properly
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      let token = req.headers.authorization.split(' ')[1];
      token = token.slice(1, token.length - 1);
        return token
    }
  }
})



const router = express.Router();

router.post('/register', (req, res) => {
  let user = new User();

  user.name = req.body.user.Name;
  user.email = req.body.user.Email;
  user.setPassword(req.body.user.Password);


  user.save(err => {
    if (err) {
      return res.send(err);
    }
  }).then(() => {
    const token = user.generateJWT();
    const t = {'token': token};
    return res.send(t);
  });
})

router.post('/login', (req, res) => {
  req.body = req.body.user;
  passport.authenticate('local', function(err, user, info) {
    // if passport sends error
    if (err) {
      res.status(404).json(err);
    }

    // if user found
    if (user) {
      const token = user.generateJWT();
      const t = {
        'token': token
      };
      res.send(t);
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res)
})

router.post('/profile', authCheck, (req, res) => {
  User.findOne({_id: req.user._id}, (err, user) => {
    if (err) console.log(err);
    user.city = req.body.profile.city;
    user.state = req.body.profile.state;
    user.save().then( () => {
      const token = user.generateJWT();
      const t = {'token': token};
      res.send(t);
    });
  });
})

router.post('/password', authCheck, (req, res) => {
  User.findOne({_id: req.user._id}, (err, user) => {
    if(user.validPassword(req.body.pass.currentPassword)){
      user.setPassword(req.body.pass.newPassword);
      user.save();
      res.send('password changed');
    } else {
      return res.send('wrong password');
    }

  });
})

router.post('/addPokemon', authCheck, (req, res) => {
  P.getPokemonByName(req.body.pokemon.name).then(pok => {
    const pokem = {
      name: pok.name,
      sprites: pok.sprites
    }
    User.findOne({_id: req.user._id}, (err, user) =>{
      if (err) {
        console.log(err);
      }
      user.pokemons.push(pokem);
      user.save()
      res.send(user.pokemons);
    });
  }).catch( error => {
      res.status(404).send(error);
    });
})

router.get('/getMyPokemons', authCheck, (req, res) => {
  User.findOne({_id: req.user._id}, (err, user) => {
    if (err) {
      console.log(err);
    }
    res.send(user.pokemons);
  })
})

router.post('/deletePokemon', authCheck, (req, res) => {
  User.findOne({_id: req.user._id}, (err, user) => {
    if (err) {
      console.log(err);
    }
    user.pokemons.splice(req.body.i, 1);
    user.save()
    res.send(user.pokemons);
  })
})

router.get('/getAll', authCheck, (req, res) => {
  User.find({}, (err, users) => {
    const pokemons = users.map(user => {
      if (user.pokemons.length > 0)
      {
        let p = {};
        p._id = user._id;
        p.pokemons = user.pokemons;
        p.name = user.name;
        return p;
      }
    });
    if (pokemons[0] === undefined) {
      return res.status(404).send('Not found');
    } else {
      return res.send(pokemons);
    }
  })
})

router.post('/exchangePokemon', authCheck, (req, res) => {
  let b = false;
  // console.log(req.user)
  User.findOne({_id: req.user._id}, (err, userM) => {
    if (err) {
      console.log(err);
    }
    if (userM.pokemons[req.body.exchange.proposed.pokemonIndex].name === req.body.exchange.proposed.pokemonName) {
      req.body.exchange.proposed.user = req.user._id;
      userM.myTradeRequests.push(req.body.exchange);
      userM.save().then(() => {
        if (b === true) {
          return res.send('request made');
        } else {
          b = true;
        }
      });
    } else {
      return res.send('oops');
    };
  })

  User.findOne({_id: req.body.exchange.wanted.user}, (err, userO) => {
    if (err) {
      console.log(err);
    }
    if (userO.pokemons[req.body.exchange.wanted.pokemonIndex].name === req.body.exchange.wanted.pokemonName) {
      req.body.exchange.proposed.user = req.user._id;
      userO.requestsForMe.push(req.body.exchange);
      userO.save().then(() => {
        if (b === true) {
          return res.send('request made');
        } else {
          b = true;
        }
      });
    } else {
      return res.send('oops');
    };
  })
})

router.get('/getRequests', authCheck, (req, res) => {
  let b = false;
  User.findOne({_id: req.user._id}, (err, user) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    const requests = {
      my: user.myTradeRequests,
      forMe: user.requestsForMe
    };
    res.send(requests);
  })
})

router.post('/rejectYours', authCheck, (req, res) => {
  let b = false;
  User.findOne({_id: req.body.request.proposed.user}, (err, userM) => {
    if (err) {
      console.log(err);
      res.send(err);
    }

    userM.myTradeRequests = userM.myTradeRequests.filter(val => {
      if (JSON.stringify(val) != JSON.stringify(req.body.request)) {
        return val;
      }
    })
    userM.save().then(() => {
      if (b === true) {
        return res.send('request rejected');
      } else {
        b = true;
      }
    });
  })

  User.findOne({_id: req.body.request.wanted.user}, (err, userO) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    userO.requestsForMe = userO.requestsForMe.filter(val => {
      if (JSON.stringify(val) != JSON.stringify(req.body.request)) {
        return val;
      }
    })
    userO.save().then(() => {
      if (b === true) {
        return res.send('request rejected');
      } else {
        b = true;
      }
    });
  });
})

router.post('/rejectOther', authCheck, (req, res) => {
  let b = false;

  // find the current logged user and filter his requestsForMe array
  User.findOne({_id: req.user._id}, (err, userM) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    userM.requestsForMe = userM.requestsForMe.filter(val => {
      if (JSON.stringify(val) != JSON.stringify(req.body.request)) {
        return val;
      }
    });
    userM.save().then(() => {
      if (b === true) {
        return res.send('request rejected');
      } else {
        b = true;
      }
    });
  });

  // find user that made a request for current user and filter his request array
  User.findOne({_id: req.body.request.proposed.user}, (err, userO) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    userO.myTradeRequests = userO.myTradeRequests.filter(val => {
      if (JSON.stringify(val) != JSON.stringify(req.body.request)) {
        return val;
      }
    });
    userO.save().then(() => {
      if (b === true) {
        return res.send('request rejected');
      } else {
        b = true;
      }
    });
  })
})

router.post('/acceptRequest', authCheck, (req, res) => {
  let b = false;
  let poke1;
  // console.log('user id', req.user._id);
  // console.log(req.body.request);
  User.findOne({_id: req.user._id}, (err, userM) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    // save pokemon to be addet to other user
    poke = userM.pokemons[req.body.request.wanted.pokemonIndex];
    // delete pokemon from current user

    userM.pokemons.splice(req.body.request.wanted.pokemonIndex, 1);

    //remove the request
    userM.requestsForMe = userM.requestsForMe.filter(val => {
      if (JSON.stringify(val) != JSON.stringify(req.body.request)) {
        return val;
      }
    });

    // find the other user
    User.findOne({_id: req.body.request.proposed.user}, (err, userO) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      // remove the trade request
      userO.myTradeRequests = userO.myTradeRequests.filter(val => {
        if (JSON.stringify(val) != JSON.stringify(req.body.request)) {
          return val;
        }
      });

      //find and remove pokoemon
      poke1 = userO.pokemons[req.body.request.proposed.pokemonIndex];

      // delet the pokemon from user
      userO.pokemons.splice([req.body.request.proposed.pokemonIndex], 1);




      // add the new pokemon to the other user
      userO.pokemons.push(poke);

      // add the traded pokemon to the current user
      userM.pokemons.push(poke1);
      userM.save();
      userO.save().then(() => {
        res.send('change accepted');
      });

    })

  })
})


module.exports = router;
