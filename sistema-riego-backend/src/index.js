var express = require('express');
var app = express();
var puerto = 3000;
var cors = require('cors');

// --------rutas--------- 
var deviceRoute = require('./routes/divice');
var meidicionRoute = require('./routes/measure');
 

app.use(express.json());
 
var corsOptions = {origin: '*', optionSuccessStatus: "200"};


app.use(cors(corsOptions));

app.use('/api/device', deviceRoute);


app.listen(puerto, function(req, res) {
    console.log("Ok!");
});
 