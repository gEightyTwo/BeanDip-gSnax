const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

function getAll(){
  return (
    db('reviews')
    .returning('*')
  )
}

function getOne(id){
  return (
    db('reviews')
    .where({id})
  )
}

function create(usersID, snackId, title, text, rating){
  return (
    db('reviews')
    .insert({user_id: usersID, snack_id: snackId, title, text, rating})
    .returning('*')
  )
}

function update(reviewsId, title, text, rating){
  return (
    db('reviews')
    .where({id: reviewsId})
    .insert({title, text, rating})
    .returning('*')
  )
}
