
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert(
        [
          {id:1, first_name: 'Abe', last_name: 'Queen', email: 'abe@123', hashed_password: '$2a$10$dlOpZThJ0KV/v4EJ.clETOYqbvyKzgbUx1cVPVCqx1VIDAKQ5Y1si', admin: true},
          {id:2, first_name: 'Claudia', last_name: 'Ligidakis', email: 'lol@no', hashed_password: '$2a$10$rHiZRkMYIUVce5jrThmCjuR9vTl/trHbPmkwBJrW63T6A54vI4UGy', admin: true},
          {id:3, first_name: 'Sam', last_name: 'Shroom', email: 'sam@shroom', hashed_password: '$2a$10$pUVFAhAmVj5ltoC9zMwvde3YAM9UxsJrGlyxq3kJLs85g5lICyXsy', admin: false},
          {id:4, first_name: 'Roger', last_name: 'Barb', email: 'axe@man', hashed_password: '$2a$10$ekcWctKs4Yt9BIau2yAXhO8qXTKVMSD0kWkWAB.0L6ZWgPO69.43K', admin: false},
        ]
      );
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
