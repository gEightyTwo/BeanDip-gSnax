
exports.up = function(knex, Promise) {
  return knex.schema.createTable('snacks', (table) => {
    table.increments();
    table.string('name').notNullable().defaultsTo('');
    table.text('description').notNullable().defaultsTo('');
    table.float('price');
    table.text('img').notNullable().defaultsTo('');
    table.boolean('is_perishable').notNullable().defaultsTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snacks')
};
