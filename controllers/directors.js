const express = require('express');

function create(req, res, next) {
    res.send('Directors create');
}

function list(req, res, next) {
    res.send('Directors list');
}

function index(req, res, next) {
    res.send('Directors index');
}

function replace(req, res, next) {
    res.send('Directors replaced');
}

function update(req, res, next) {
    res.send('Directors update');
}

function destroy(req, res, next) {
    res.send('Directors destroy');
}

module.exports = {
    create,
    list,
    index,
    replace,
    update,
    destroy
}