const {Router} = require('express');
const router = Router();
const mysqlConnection = require('../db/db');

//Metodo GET  - Permite mostrar los recordatorios 
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

//Metodo POST - Permite enviar un nuevo recordatorio 
router.post('/recordatorio', (req, res) => {
    const{id, fecha, id_calendario} = req.body;

    let recordatorio = [id, fecha, id_calendario];
    
    let nuevoRecordatorio = `INSERT INTO recordatorio (id, fecha, id_calendario) VALUES (?,?,?);`
    
    mysqlConnection.query(nuevoRecordatorio, recordatorio, (err, results, fiedls) => {
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:'Recordatorio Ingresado'});
        }
   });
});

//Metodo PUT - Permite actualizar el recordatorio  por medio del id
router.put('/recordatorio/:id', (req, res) =>{
    const{fecha, id_calendario} = req.body;
    
    const {id} = req.body;
    mysqlConnection.query(`UPDATE recordatorio SET fecha=?, id_calendario=? WHERE id=?`,
        [fecha, id_calendario, id], (err, rows, fiedls)=>{
            if(!err){
                res.json({status:'Recordatorio actualizado'})
            }else{
                console.log(err.message);
            }//Fin si
        });
});

//Metodo DELETE - Permite eliminar el recordatorio por medio del id
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