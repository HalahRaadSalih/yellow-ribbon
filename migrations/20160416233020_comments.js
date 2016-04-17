
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.integer('user_id').unsigned().index().references('id').inTable('users');
    table.integer('post_id').unsigned().index().references('id').inTable('posts');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
