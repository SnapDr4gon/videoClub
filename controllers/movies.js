const express = require ('express');
const { Movie } = require('../db');

function create(req, res,next){
    const title = req.body.title;
    const genreId = req.body.genreId;
    const directorId = req.body.directorId;
    Movie.create({
        title: title,
        genreId: genreId,
        directorId: directorId
    }).then(object => res.json(object))
      .catch(err => res.send(err));
}

function list(req, res, next) {
    Movie.findAll({include:['genre', 'director']}) //Dentro de el objeto puedo agregar consultas
         .then(object => res.json(object))
         .catch(err => res.send(err));
}

function index(req, res,next){
    res.send('Users index');
}

function replace(req, res,next){
    res.send('Movie replaced')
}

function update(req, res,next){
    res.send('Movies update');
}

function destroy(req, res,next){
    res.send('Movies destroy');
}

module.exports = {
    list, index, create, replace, update, destroy
};