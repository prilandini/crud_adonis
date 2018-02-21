'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/api/films', 'FilmController.index')
Route.post('/api/films', 'FilmController.store')
Route.get('/api/films/:id', 'FilmController.show')
Route.delete('/api/films/:id', 'FilmController.destroy')
Route.put('/api/films/:id', 'FilmController.update')
