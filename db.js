const Sequelize = require('sequelize');
const directorModel = require('./models/director');
const genreModel = require('./models/genre');
const movieModel = require('./models/movie');

/*
    1)  Nombre de la base de datos
    2)  Usuario
    3)  Contraseña
    4)  Objeto de configuracion ORM
*/

const sequelize = new Sequelize('dbVideoClub', 'root', 'abcd1234', {
    host: '172.17.0.2',
    dialect: 'mysql'
});

const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Movie = genreModel(sequelize, Sequelize);

//  Un genero puede tener muchas peliculas
Genre.hasMany(Movie, {as: 'movies'});

//  Una pelicula solo tiene un genero
Movie.belongsTo(Genre, {as: 'genre'});

// Un director puede tener muchas peliculas
Director.hasMany(Movie, {as: 'movies'});

//  Una pelicula puede tener solo un director
Movie.belongsTo(Director, {as: 'director'});

sequelize.sync({
    force: true
}).then(() => {
    console.log('Base de datos sincronizada.');
});

module.exports = { Director, Genre, Movie };