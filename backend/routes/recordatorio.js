const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

// Todos los middleware get,put, .. metodos
router.get('/recordatorio', (req, res) => {
    mysqlConnection.query('SELECT * FROM recordatorio', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/recordatorio', (req, res) => {
    const {id, } = req.body;
    let moduloArray = [modulo,modprefijo];
    let nuevoModulo = 'INSERT INTO modulos(modulo, mod_prefijo) VALUES (?,?)';
    mysqlConnection.query(nuevoModulo, moduloArray, (err,results,fields) => {
        if(!err){
            return console.error(err);
        }else{
            res.json({message:modulo + 'Modulo Creado'})
        }

    });
});


module.exports = router;