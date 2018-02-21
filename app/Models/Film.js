'use strict'

const Model = use('Model')

class Film extends Model {
  static get table () {
    return 'films'
  }
  
  static get primaryKey() {
    return 'id'
  }
}

module.exports = Film
