
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.string('title').notNullable().defaultsTo('');
    table.string('text').notNullable().defaultsTo('');
    table.string('rating').notNullable().defaultsTo('2.5');
    table.integer('snack_id').notNullable()
    table.foreign('snack_id').references('snacks.id').onDelete('CASCADE')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
