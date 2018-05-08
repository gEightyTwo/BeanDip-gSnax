const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')


function getUserbyEmail(email){
  return (
    db('users')
    .where({ email })
    .first()
  )
}

function getOne(usersId){
  return (
    db('users')
    .where({ id: usersId })
    .first()
  )
}

function create(body){
  let password = body.password
  let fname = body.fname
  let lname = body.lname
  let email = body.email
  let admin = body.admin || false

  return getUserByEmail(email)
  .then(function(data){
    if(data) throw { status: 400, message:'Already exists'}
    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){
    return (
      db('users')
      .insert({ fname, lname, email, email, password: hashedPassword, admin})
      .returning('*')
    )
  })
  .then(function([ {password, ...data} ]){
    return data
  })
}

function remove(usersId){
  let usersid = usersId
  return (
    db('users')
    .where({
      id: usersid
    })
    .del()
  )
}

function update(){

}

module.exports = {getOne, create, update, remove, getUserbyEmail}
