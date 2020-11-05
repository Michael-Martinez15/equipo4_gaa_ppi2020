const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//Metodo GET
router.get('/recordatorio', (req, res) => {
    mysqlConnection.query('SELECT * FROM recordatorio', (err, rows, fiedls) => {
        //Si no hay error
     if(!err){ 
        //Verdadero
       res.json(rows);
    }else{
       console.log(err);
    }
    })
});

//HOLAAAA
//Metodo POST
router.post('/recordatorio', (req, res) => {
    const{id, hora, fecha, id_calendari} = req.body;

    let recordatorio = [id, hora, fecha, id_calendario];
    
    let nuevoRecordatorio = `INSERT INTO recordatorio (id, hora, fecha, id_calendario) VALUES (?,?,?,?)`;
    
    mysqlConnection.query(nuevoRecordatorio, recordatorio, (err, results, fiedls) => {
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:'Recordatorio Ingresado'});
        }
   });
});

//Metodo PUT
router.put('/recordatorio/:id', (req, res) =>{
    const{hora, fecha, id_calendario} = req.body;
    
    const {id} = req.body;
    mysqlConnection.query(`UPDATE recordatorio SET hora=?, fecha=?, id_calendario=? WHERE id=?`,
        [hora, fecha, id_calendario, id], (err, rows, fiedls)=>{
            if(!error){
                res.json({status:'Recordatorio actualizado'})
            }else{
                console.log(err.message);
            }//Fin si
        });
});

//Metodo DELETE
router.delete('/recordatorio/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM recordatorio WHERE id =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `El Recordatorio ha sido eliminado`})
      }else{
        console.log(err);
      }
    });
  });

module.exports = router;