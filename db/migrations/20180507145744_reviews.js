
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.string('title').notNullable().defaultsTo('');
    table.string('text').notNullable().defaultsTo('');
    table.string('rating').notNullable().defaultsTo('2.5');
    table.integer('snack_id').notNullable().references('snacks.id');
    table.integer('user_id').notNullable().references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
