const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');


//Metodo GET
router.get('/calendario', (req, res) => {
   mysqlConnection.query('SELECT * FROM calendario', (err, rows, fiedls) => {
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
router.post('/calendario', (req, res) => {
   const{id, fecha, hora, descripción} = req.body;

   let calendario = [id, fecha, hora, descripción];
   
   let nuevoCalendario = `INSERT INTO calendario (id, fecha, hora, descripción) VALUES (?,?,?,?)`;
   
   mysqlConnection.query(nuevoCalendario, calendario, (err, results, fiedls) => {
       if(err){
           return console.error(err.message);
       }else{
           res.json({message:'Calendario Ingresado'});
       }
  });
});

//Metodo PUT
router.put('/calendario/:id', (req, res) =>{
   const{fecha, hora, descripción} = req.body;
   
   const {id} = req.body;
   mysqlConnection.query(`UPDATE calendario SET fecha=?, hora=?, descripción=? WHERE id=?`,
       [fecha, hora, descripción, id], (err, rows, fiedls)=>{
           if(!err){
               res.json({status:'Calendario actualizado'})
           }else{
               console.log(err.message);
           }//Fin si
       });
});

//Metodo DELETE
router.delete('/calendario/:id', (req,res) => {
   const { id } = req.params;
   mysqlConnection.query(`DELETE FROM calendario WHERE id =?`,[id],(err,rows,fields) => {
     if("!err"){
       res.json({status: `El calendario ha sido eliminado`})
     }else{
       console.log(err);
     }
   });
 });


module.exports = router;