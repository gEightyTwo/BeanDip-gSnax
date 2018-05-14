
exports.seed = function(knex, Promise) {
  return knex('reviews').del()
    .then(() => {
      return knex('reviews').insert(
        [
          {id:1, title: 'Hello!', text: 'Wowowowowow', rating: '1', snack_id: 1, user_id: 1},
          {id:2, title: 'Never again', text: 'Bobobobobob', rating: '5', snack_id: 2, user_id: 2},
          {id:3, title: 'What??', text: 'Snapsnapsnap', rating: '2', snack_id: 2, user_id: 3},
          {id:4, title: 'silly', text: 'BigBoiiiiiii', rating: '4', snack_id: 3, user_id: 3},
        ]
      );
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));"
      );
    });
};
