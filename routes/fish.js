var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');


//get fish from /api/fish
router.route('/')
  .get(function(req, res){
      Fish.find(function(err, fishes){
        if(err){
          res.status(500).send(err, 'Something broke!');
        } else {
          res.json(fishes)
        }
      });
  })
// post fish to /api/fish
  .post(function(req, res){

    var fish = new Fish({
      name: req.body.name || 'none',
      color: req.body.color || 'none',
      people_eater: req.body.people_eater || 'none',
      length: req.body.length || 'none',
      img: req.body.img || 'none',
    });
  
    console.log(fish);

    fish.save(function(err, fish){
      if(err){
          res.status(500).send(err, 'Something broke!');
      } else {
        res.json(fish)
      }
    });
  })

router.route('/one_fish/:fish_id')
// get a fish from /api/fish/one_fish/ID_Number
  .get(function(req, res){
      Fish.findById(req.params.fish_id, function(err, fish){
        if (err){
          res.status(500).send(err, 'Something broke');
        } else {
          res.json(fish)
        }
    });
  })

  .put(function(req, res){
      Fish.findById(req.params.fish_id, function(err, fish){
        if(err){
          res.status(500).send(err, 'Something broke!');
        } else {
            fish.name = req.body.name ? req.body.name : fish.name;
            fish.color = req.body.color ? req.body.color : fish.color;
            fish.people_eater = req.body.people_eater ? req.body.people_eater : fish.people_eater;
            fish.length = req.body.length ? req.body.length : fish.length;
            fish.img = req.body.img ? req.body.img : fish.img;   

          fish.save(function(err, fish){
            if(err){
              res.status(500).send(err, 'Something broke!');
            } else {
              res.json(fish)
            }
          })
        }
      });
  })

  .delete(function(req, res){
      Fish.remove({_id: req.params.fish_id}, function(err, fish){
        if(err){
          res.status(500).send(err, 'Something broke!');
        } else {
          console.log(fish);
          res.json({ message: "fish has been deleted!"})
        }
      });  
  })


router.route('/man_eater')
  .get(function(req, res) {
      Fish.find({people_eater: true}, function(err, fish){
        if(err){
          res.status(500).send(err, 'Something broke!');
        } else {
          res.json(fish)
        }
      });
  })


  module.exports = router;