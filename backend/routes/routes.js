const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');


router.get('/estudiantes', (req, res) => {
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

/* Crear un nuevo estudiante*/
router.post('/nuevo-estudiante', (req, res) => {
    const{nombres, apellidos, correo, documento, telefono_celular,
        fecha_nacimiento, institucion_id} = req.body;

    let estudiantes = [nombres, apellidos, correo, documento, telefono_celular,
        fecha_nacimiento, institucion_id];
    
    let nuevoEstudiante = `INSERT INTO actores (nombres, apellidos, correo, documento, telefono_celular,
        fecha_nacimiento, institucion_id) VALUES (?,?,?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoEstudiante, estudiantes, (err, results, fiedls) => {
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:'Estudiante Matriculado'});
        }
   }); //Fin query insert
}); //Fin nuevo-estudiante

//Editar un estudiante
router.put('/estudiante/:id', (req, res) =>{
    const{nombres, apellidos, correo, documento, telefono_celular,
         fecha_nacimiento, institucion_id} = req.body;
    
    const {id} = req.body;
    mysqlConnection.query(`UPDATE actores SET nombres=?, apellidos=?, correo=?, documento=?, telefono_celular=?,
                           fecha_nacimiento=?, institucion_id=? WHERE id=?`,
    [nombres, apellidos, correo, documento, telefono_celular,
     fecha_nacimiento, institucion_id, id], (err, rows, fiedls)=>{
            if(!error){
                res.json({status:'Estudiante actualizado'})
            }else{
                console.log(err.message);
            }//Fin si
        }
    )

}
)

module.exports = router;