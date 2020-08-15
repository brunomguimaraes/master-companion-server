import * as Knex from 'knex'


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('sheets', (table: Knex.CreateTableBuilder) => {
    table.increments('id')
    table.integer('character_id').references('characters.id').onDelete('CASCADE')
    table.string('sheet_type')
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('sheets')
}

