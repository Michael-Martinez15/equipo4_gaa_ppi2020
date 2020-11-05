const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//Metodo GET
router.get('/tipo', (req, res) => {
  mysqlConnection.query('SELECT * FROM tipo', (err, rows, fiedls) => {
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
router.post('/tipo', (req, res) => {
  const{id,nombre,descripcion} = req.body;

  let tipo = [id,nombre,descripcion];
  
  let nuevoTipo = `INSERT INTO tipo (id,nombre,descripcion) VALUES (?,?,?)`;
  
  mysqlConnection.query(nuevoTipo, tipo, (err, results, fiedls) => {
      if(err){
          return console.error(err.message);
      }else{
          res.json({message:'Tipo Ingresado'});
      }
 });
});

//Metodo PUT
router.put('/tipo/:id', (req, res) =>{
  const{nombre, descripcion } = req.body;
  
  const {id} = req.body;
  mysqlConnection.query(`UPDATE tipo SET nombre=?, descripcion=?,  WHERE id=?`,
      [nombre, descripcion, id], (err, rows, fiedls)=>{
          if(!err){
              res.json({status:'Tipo actualizado'})
          }else{
              console.log(err.message);
          }//Fin si
      });
});

//Metodo DELETE
router.delete('/tipo/:id', (req,res) => {
  const { id } = req.params;
  mysqlConnection.query(`DELETE FROM tipo WHERE id =?`,[id],(err,rows,fields) => {
    if("!err"){
      res.json({status: `El Tipo ha sido eliminado`})
    }else{
      console.log(err);
    }
  });
});