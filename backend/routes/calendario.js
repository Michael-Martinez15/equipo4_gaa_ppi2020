const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');


router.get('/calendario', (req, res) => {
    mysqlConnection.query('SELECT * FROM actores', (err, rows, fiedls) => {
        //Si no hay error
     if(!err){ 
        //Verdadero
       res.json(rows);
    }else{
       console.log(err);
    }
    })
});

module.exports = router;