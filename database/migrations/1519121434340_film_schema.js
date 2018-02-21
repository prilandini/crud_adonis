'use strict'

const Schema = use('Schema')

class FilmSchema extends Schema {
  up () {
    this.create('films', (table) => {
      table.increments()
      table.string('title')
      table.string('director').nullable()
      table.string('producer').nullable()
      table.string('writer').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('films')
  }
}

module.exports = FilmSchema
