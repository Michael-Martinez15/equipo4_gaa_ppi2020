const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//Metodo GET
router.get('/usuario', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fiedls) => {
        //Si no hay error
     if(!err){ 
        //Verdadero
       res.json(rows);
    }else{
       console.log(err);
    }
    })
});

//Metodo POST
router.post('/usuario', (req, res) => {
    const{id, nombre, apellido, correo, contraseña, numero_celular,
        fecha_de_inicio, id_tipo} = req.body;

    let usuario = [id, nombre, apellido, correo, contraseña, numero_celular,
        fecha_de_inicio, id_tipo];
    
    let nuevoUsuario = `INSERT INTO usuario (id, nombre, apellido, correo, contraseña, numero_celular,
        fecha_de_inicio, id_tipo) VALUES (?,?,?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fiedls) => {
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:'Usuario Ingresado'});
        }
   });
});

//Metodo PUT
router.put('/usuario/:id', (req, res) =>{
    const{nombre, apellido, correo, contraseña, numero_celular,
        fecha_de_inicio, id_tipo} = req.body;
    
    const {id} = req.body;
    mysqlConnection.query(`UPDATE usuario SET nombre=?, apellido=?, correo=?, contaseña=?, numero_celular=?,
                           fecha_de_inicio=?, id_tipo=? WHERE id=?`,
        [nombre, apellido, correo, contraseña, numero_celular,
        fecha_de_inicio, id_tipo, id], (err, rows, fiedls)=>{
            if(!error){
                res.json({status:'Usuario actualizado'})
            }else{
                console.log(err.message);
            }//Fin si
        });
});

//Metodo DELETE
router.delete('/usuario/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM usuario WHERE id =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `El usuario ha sido eliminado`})
      }else{
        console.log(err);
      }
    });
  });

module.exports = router;