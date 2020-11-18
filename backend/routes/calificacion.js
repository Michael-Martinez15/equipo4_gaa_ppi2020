const {Router} = require('express');
const router = Router();
const mysqlConnection = require('../db/db');

//Metodo GET - Permite mostrar las calificaciones 
router.get('/calificacion', (req, res) => {
  mysqlConnection.query('SELECT * FROM calificacion', (err, rows, fiedls) => {
      //Si no hay error
   if(!err){ 
      //Verdadero
     res.json(rows);
  }else{
     console.log(err);
  }
  })
});

//Metodo POST - Permite enviar una calificacion 
router.post('/calificacion', (req, res) => {
  const{sugerencias, calificacion, id_usuario} = req.body;

  let Calificacion = [sugerencias, calificacion, id_usuario];
  let nuevoCalificacion = `INSERT INTO calificacion (sugerencias, calificacion, id_usuario) VALUES (?,?,?);`
  
  
  mysqlConnection.query(nuevoCalificacion, Calificacion, (err, results, fiedls) => {
      if(err){
          return console.error(err.message);
      }else{
          res.json({message:'Calificacion Enviada'});
      }
 });
});


module.exports = router;