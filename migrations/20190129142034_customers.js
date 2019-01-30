exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table){
    table.increments()
    table.boolean('is_active').notNullable().defaultTo(true)
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.string('hashed_password').notNullable().defaultTo('')
    table.boolean('is_sender').defaultTo(null)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers')
}
