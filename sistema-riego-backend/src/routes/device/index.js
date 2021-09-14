var express = require('express');
var routerDispositivo = express.Router();
var mysql = require('../../mysql');

// -- GET one device
routerDevice.get('/:id', function(req, res) {
    mysql.query("SELECT * FROM Dispositivos WHERE dispositivoId = ?", [req.params.id], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result[0]);
    });
});

// GET all devices
routerDevice.get('/', function(req, res) {
    mysql.query("SELECT * FROM Dispositivos", function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result);
    });
});




 module.exports = routerDispositivo;