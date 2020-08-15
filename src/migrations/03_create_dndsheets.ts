import * as Knex from 'knex'


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('dndsheets', (table: Knex.CreateTableBuilder) => {
    table.increments('id')
    table.integer('sheet_id').references('sheets.id').onDelete('CASCADE')
    table.string('race')
    table.string('level')
    table.string('background')
    table.string('alignment')
    table.integer('experience_points')
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('dndsheets')
}

