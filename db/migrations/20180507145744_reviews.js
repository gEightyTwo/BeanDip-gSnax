
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('text').notNullable().defaultTo('');
    table.integer('rating').notNullable().defaultTo(2.5);
    table.integer('snack_id').notNullable().references('snacks.id');
    table.integer('user_id').notNullable().references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
