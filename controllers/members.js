const express = require('express');
const Members = require('../db');

function create(req, res, next) {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const phone = req.body.phone;
    const status = req.body.status;
    Members.create({
        name: name,
        lastName: lastName,
        address: address,
        phone: phone,
        status: status
    }).then(object => res.json(object))
      .catch(err => res.send(err));
}

function list(req, res, next) {
    const id = req.params.id;
    Memebers.findAll(id)
            .then(object => res.json(object))
            .catch(err => res.send(err));
}

function index(req, res, next) {
    const id = req.params.id;
    Members.findByPk(id)
           .then(object => res.json(object))
           .catch(err => res.send(err));
}

function replace(req, res, next) {
    const id = req.params.id;
    Members.findByPk(id).then(object => {
        const name = req.body.name ? req.body.name : "";
        const lastName = req.body.lastName ? req.body.lastName : "";
        const address = req.body.address ? req.body.address : "";
        const phone = req.body.phone ? req.body.phone : "";
        const status = req.body.status ? req.body.status : "";
        object.update({
            name: name,
            lastName: lastName,
            address: address,
            phone: phone,
            status: status
        }).then(object => res.json(object))
          .catch(err => res.send(err));
    }).catch(err => res.send(err));
}

function update(req, res, next) {
    const id = req.params.id;
    Members.findByPk(id).then(object => {
        const name = req.body.name ? req.body.name : object.name;
        const lastName = req.body.lastName ? req.body.lastName : object.lastName;
        const address = req.body.address ? req.body.address : object.address;
        const phone = req.body.phone ? req.body.phone : object.phone;
        const status = req.body.status ? req.body.status : object.status;
        object.update({
            name: name,
            lastName: lastName,
            address: address,
            phone: phone,
            status: status
        }).then(object => res.json(object))
          .catch(err => res.send(err));
    }).then(object => res.json(object))
      .catch(err => res.send(err));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Members.destroy({where: {id: id}})
           .then(object => res.json(object))
           .catch(err => res.send(err));
}

module.exports = {
    create,
    list,
    index,
    replace,
    update,
    destroy
}