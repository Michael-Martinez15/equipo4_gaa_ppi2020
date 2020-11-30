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


//Metodo PUT - Permite actualizar la calificación por medio del id
router.put("/calificacion/:id_usuario", (req, res) => {
  const { sugerencias, calificacion } = req.body;

  const { id_usuario } = req.params;
  mysqlConnection.query(
    `UPDATE calificacion SET sugerencias=?, calificacion=? WHERE id_usuario=?`,
    [sugerencias, calificacion, id_usuario],
    (err, rows, fiedls) => {
      if (!err) {
        res.json({ status: "Calificacion actualizada" });
      } else {
        console.log(err.message);
      } //Fin si
    }
  );
});

//Metodo DELETE - Permite eliminar la calificación por medio del id
router.delete("/calificacion/:id_usuario", (req, res) => {
  const { id_usuario } = req.params;
  mysqlConnection.query(
    `DELETE FROM calificacion WHERE id_usuario =?`,
    [id_usuario],
    (err, rows, fields) => {
      if ("!err") {
        res.json({ status: `La calificacion ha sido eliminada` });
      } else {
        console.log(err);
      }
    }
  );
});


module.exports = router;