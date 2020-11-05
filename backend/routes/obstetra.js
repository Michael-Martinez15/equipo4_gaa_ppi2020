const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db')

//Metodo GET
router.get('/obstetra', (req, res) => {
  mysqlConnection.query('SELECT * FROM obstetra', (err, rows, fiedls) => {
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
router.post('/obstetra', (req, res) => {
  const{id,nombres,apellidos} = req.body;

  let obstetra = [id,nombres,apellidos];
  
  let nuevoObstetra = `INSERT INTO obstetra (id,nombres,apellidos) VALUES (?,?,?)`;
  
  mysqlConnection.query(nuevoObstetra, obstetra, (err, results, fiedls) => {
      if(err){
          return console.error(err.message);
      }else{
          res.json({message:'Obstetra Ingresado'});
      }
 });
});

//Metodo PUT
router.put('/obstetra/:id', (req, res) =>{
  const{nombres, apellidos, } = req.body;
  
  const {id} = req.body;
  mysqlConnection.query(`UPDATE obstetra SET nombres=?, apellidos=?,  WHERE id=?`,
      [nombres, apellidos, id], (err, rows, fiedls)=>{
          if(!err){
              res.json({status:'Obstetra actualizado'})
          }else{
              console.log(err.message);
          }//Fin si
      });
});

//Metodo DELETE
router.delete('/obstetra/:id', (req,res) => {
  const { id } = req.params;
  mysqlConnection.query(`DELETE FROM obstetra WHERE id =?`,[id],(err,rows,fields) => {
    if("!err"){
      res.json({status: `El obstetra ha sido eliminado`})
    }else{
      console.log(err);
    }
  });
});



module.exports = router;