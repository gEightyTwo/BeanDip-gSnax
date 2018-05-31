const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

function getAll(){
  return (
    knex('reviews')
    // .leftJoin('users', 'user_id', 'users.id')
    .returning('*')
  )
}

function getOne(id){
  return (
    knex('reviews')
    .innerJoin('users', 'user_id', 'users.id')
    .where({id})
  )
}

// function checkUser(usersID, snackId){
//   return (
//     knex('reviews')
//     .where({ snack_id: snackId, user_id: usersId })
//     .first()
//   )
// }

function create(usersID, snackId, title, text, rating){
  console.log(usersID, snackId, title, text, rating)

  // return checkUser(usersID, snackId)
  // .then(data => {
    // if(data) throw { status: 400, message:'User already created snack'}
    return (
    knex('reviews')
    .insert({user_id: usersID, snack_id: snackId, title, text, rating})
    .returning('*')
    )
  // })
}

function update(reviewsId, title, text, rating){
  const toUpdate = {}
  if(title){
    toUpdate.title = title
  }
  if(text){
    toUpdate.text = text
  }
  if(rating){
    toUpdate.rating = rating
  }

  return (
    knex('reviews')
    .where({id: reviewsId})
    .update(toUpdate)
    .returning('*')
  )
}

function remove(reviewsId){
  return (
    knex('reviews')
    .where({id: reviewsId})
    .del()
    .returning('*')
  )
}

module.exports = {getOne, getAll, create, update, remove}
