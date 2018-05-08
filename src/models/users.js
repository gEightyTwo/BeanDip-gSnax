const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function getOneByUserName(username){
  return (  db('users')
    .where({ username })
    .first()
  )
}

function create(username, password){
  return getOneByUserName(username)
  .then(function(data){
    if(data) throw { status: 400, message:'User already exists'}
    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){
    return (
      db('users')
      .insert({ username, password: hashedPassword })
      .returning('*')
    )
  })
  .then(function([ data ]){
    delete data.password
    return data
  })
}



module.exports = { getOne, create, remove, update, getUserbyUsername }
