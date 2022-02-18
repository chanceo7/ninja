const { response } = require("express")
const Pirate= require("../model/Pirate.model")


module.exports.findAll=(req, res)=>{
    Pirate.find().sort({speed:-1})
    .then(results => res.json({results}))
    .catch(err => res.status(400).json({message:"the was a error in the process"}) )
}
module.exports.createOne=(req, res)=>{
    Pirate.create(req.body)
    .then(results => res.json({results:results}))
    .catch(err => res.status(400).json({err}) )
}

module.exports.deleteOne=(req, res)=>{
    Pirate.deleteOne({_id: req.params._id})
    .then(results => res.json({results:results}))
    .catch(err => res.status(400).json({err}) )
}

module.exports.getOne=(req, res)=>{
    Pirate.findOne({_id: req.params._id})
    .then(results => res.json({results:results}))
    .catch(err => res.status(400).json({err}) )
}

module.exports.editOne=(req, res)=>{
    Pirate.updateOne({_id: req.params._id}, req.body, {runValidators:true} )
    .then(results => res.json({results:results}))
    .catch(err => res.status(400).json({err}) )
}

module.exports.updateOne=(req, res)=>{
    Pirate.findOneAndUpdate({_id: req.params._id}, {$inc: {speed:1}}, {new:true} )
    .then(results => res.json({results:results}))
    .catch(err => res.status(400).json({err}) )
}