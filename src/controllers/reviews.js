const reviewModel = require('../models/reviews')


function getAll(req, res, next){
  reviewModel.getAll()
  .then(allReviews => {
    res.status(200).send({ allReviews })
  })
}

function getOne(req, res, next){
  if(!req.params.reviewsId){
    return next({status:400, message:'Bad Request'})
  }
  reviewModel.getOne(req.params.reviewsId)
  .then(review => {
    res.status(200).send({review})
  })
  .catch(next)
}

function create(req, res, next){
  if(!req.params.usersId){
    return next({status:400, message:'Bad Request'})
  }
  reviewModel.create(req.params.usersId,req.params.snackId, req.body.title, req.body.text, req.body.rating)
  .then(review => {
    res.status(200).send({review})
  })
  .catch(next)
}

function update(req, res, next){
  if(!req.params.usersId || !req.params.reviewsId){
    return next({status:400, message:'Bad Request'})
  }
  reviewModel.update(req.params.usersId, req.params.reviewsId, req.body.title, req.body.text, req.body.rating)
  .then(review => {
    res.status(200).send({review})
  })
  .catch(next)
}

function remove(req, res, next){

}

module.exports = {getOne, getAll, create, update, remove}
