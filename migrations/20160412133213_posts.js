
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.string('post');
    table.string('date');
    table.integer('user_id').unsigned().index().references('id').inTable('users');
  });
};
 
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts');
};
