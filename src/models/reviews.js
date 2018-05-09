const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

function getAll(){
  return (
    knex('reviews')
    .returning('*')
  )
}

function getOne(id){
  return (
    knex('reviews')
    .where({id})
  )
}

function create(usersID, snackId, title, text, rating){
  return (
    knex('reviews')
    .insert({user_id: usersID, snack_id: snackId, title, text, rating})
    .returning('*')
  )
}

function update(reviewsId, title, text, rating){
  return (
    knex('reviews')
    .where({id: reviewsId})
    .insert({title, text, rating})
    .returning('*')
  )
}

function remove(reviewsId){
  return (
    knex('reviews')
    .where({id: reviewsId})
    .del()
    .returning('*')
}
