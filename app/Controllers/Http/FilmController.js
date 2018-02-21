'use strict'

const Film = use('App/Models/Film')

class FilmController {
  async index ({ response }) {
    let films = await Film.all()

    return response.json(films)
  }

  async create ({ params, response }) {
  }

  async store ({ request, response }) {
    const filmData = request.all()
    console.log(filmData)
    const film = new Film()
    film.title = filmData.title
    film.director = filmData.director
    film.producer = filmData.producer
    film.writer = filmData.writer
    
    await film.save()

    return response.status(201).json(film)
  }

  async show ({ params, response}) {
    const film = await Film.find(params.id)

    return response.json(film)
  }

  async edit () {
  }

  async update ({ params, request, response }) {
    const filmData = request.only(['title', 'director', 'producer', 'writer'])
    
    const film = await Film.find(params.id)
    film.title = filmData.title
    film.director = filmData.director
    film.producer = filmData.producer
    film.writer = filmData.writer

    await film.save()
    
    return response.status(200).json(film)
  }

  async destroy ({ params, response }) {
    const film = await Film.find(params.id)
    if(!film) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await film.delete()

    return response.status(204).json(null)
  }
}

module.exports = FilmController
