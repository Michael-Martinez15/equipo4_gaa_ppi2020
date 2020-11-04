const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//Esto es una prueba corregir
router.get('/calendario', (req, res) => {
    mysqlConnection.query('SELECT * FROM actores', (err, rows, fiedls) => {
        //Callback
        //Si no hay error
     if(!err){ 
        //Verdadero
       res.json(rows);
    }else{
       console.log(err);
    }
    })
});//Fin get/Estudiantes

module.exports = router;