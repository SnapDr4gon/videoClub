const Sequelize = require('sequelize');

const directorModel = require('./models/director');
const genreModel = require('./models/genre');
const movieModel = require('./models/movie');
const actorModel = require('./models/actor');
const memberModel = require('./models/member');
const movieActorModel = require('./models/movieActor');

/*
    1) Nombre base de datos
    2) Usuario base de datos
    3) Contraseña base de datos
    4) Objeto de configuracion ORM
*/

const sequelize = new Sequelize('dbVideoClub', 'root', 'abcd1234', {
    host: 'localhost',
    dialect: 'mysql'
});

const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);
const Actor = actorModel(sequelize, Sequelize);
const Member = memberModel(sequelize, Sequelize);
const MovieActor = movieActorModel(sequelize, Sequelize);

// Un genero puede tener muchas peliculas
Genre.hasMany(Movie, {as:'myMovies'});

// Un pelicula tiene un genero
Movie.belongsTo(Genre, {as:'myGenre'});

// Un director puede tener muchas peliculas
Director.hasMany(Movie, {as:'myMovies'});

// Una pelicula tiene un director
Movie.belongsTo(Director, {as: 'myDirector'});

// Un actor participa en muchas peliculas
MovieActor.belongsTo(Movie, {foreingKey: 'movieId'});

// En una pelicula participan muhos actores
MovieActor.belongsTo(Actor, {foreingKey: 'actorId'});

Movie.belongsToMany(Actor, {
    foreingKey: 'actorId',
    as: 'actors',
    through: 'movies_actors' // por al tabla
})

Actor.belongsToMany(Movie,{
    foreingKey: 'movieId',
    as: 'movies',
    through: 'movies_actors'
});

sequelize.sync({ // Solo para el desarrollo
    force: true
}).then(() => {
    console.log('Base de datos sincronizada');
});

module.exports = { Director, Genre, Movie, Actor, Member };