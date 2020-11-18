const {Router} = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//Metodo GET - Permite mostrar los controles mensuales
router.get('/control_mensual',(req,res)=>{
   mysqlConnection.query('SELECT * FROM control_mensual',
    (err,rows,fields)=>{
      if(!err)
     { 
       res.json(rows);
     }else{
       console.log(err);
     }
    })
}) 

//Metodo POST - Permite enviar un control mensual
router.post('/control_mensual', (req, res) => {
    const {id, peso, descripcion, observacion, id_obstetra} = req.body
    
    let control = [id, peso, descripcion, observacion, id_obstetra];
    let nuevoControl = `INSERT INTO control_mensual VALUES (?,?,?,?,?);`

    mysqlConnection.query(nuevoControl,control, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Control Ingresado`})
   });
});
  
//Metodo PUT - Permite actualizar el control mensual por medio del id
  router.put('/control_mensual/:id', (req,res) => {
  const {peso, descripcion, observacion, id_obstetra} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE control_mensual
                       SET peso= ?, descripcion = ?, observacion= ?, id_obstetra = ? 
                       WHERE id = ?`,
                       [peso, descripcion, observacion, id_obstetra, id], (err, rows,fields) => {
   if(!err){
    res.json({status: `El control ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

//Metodo DELETE - Permite eliminar el control mensual por medio del id
  router.delete('/control_mensual/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM control_mensual WHERE id =?`,[id],(err,rows,fields) => {
      
       if("!err"){
        res.json({status: `El control ha sido eliminado`})
      }else{
        console.log(err);
      }
    });
  });

module.exports = router;