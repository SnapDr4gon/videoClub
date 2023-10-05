const express = require ('express');

function create(req, res,next){
    res.send('Movies create');
}

function list(req, res, next) {
    res.send('Movies list');
}

function index(req, res,next){
    res.send('Movies Index');
}

function replace(req, res,next){
    res.send('Movies replace');
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