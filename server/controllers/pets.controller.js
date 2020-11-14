const Pet = require('../models/pets.model'),
    mongoose = require('mongoose');
const PetsRoutes = require('../routes/pets.routes');

module.exports = {
    index: (req,res) => {
        Pet.find()
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    create : (req,res) => {
        Pet.create(req.body)
            .then(data =>  res.json({results:data}))
            .catch(err =>  res.json(err.errors))
    },
    specific : (req,res) => {
        Pet.findOne({_id: req.params.id})
            .then(data =>  res.json({results:data}))
            .catch(err =>  res.json(err.errors))
    },
    update : (req,res) => {
        Pet.findOneAndUpdate({_id:req.params.id},req.body, {runValidators:true})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    delete : (req,res) => {
        Pet.deleteOne({_id:req.params.id})
            .then(data =>  res.json({results:data}))
            .catch(err =>  res.json(err.errors))
    }
};