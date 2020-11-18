const {Router} = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//Metodo GET - Permite mostrar el tipo usuario
router.get("/tipo_usuario", (req, res) => {
  mysqlConnection.query("SELECT * FROM tipo_usuario", (err, rows, fiedls) => {
    //Si no hay error
    if (!err) {
      //Verdadero
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//Metodo POST - Permite enviar un nuevo tipo usuario 
router.post("/tipo_usuario", (req, res) => {
  const { id, nombre, descripcion } = req.body;

  let tipo_usuario = [id, nombre, descripcion];

  let nuevoTipo_usuario = `INSERT INTO tipo_usuario (id, nombre, descripcion) VALUES (?,?,?);`

  mysqlConnection.query(nuevoTipo_usuario, tipo_usuario, (err, results, fiedls) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.json({ message: "tipo_usuario Ingresado" });
    }
  });
});

//Metodo PUT  - Permite actualizar el tipo usuario  por medio del id
router.put("/tipo_usuario/:id", (req, res) => {
  const { nombre, descripcion } = req.body;

  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE tipo_usuario SET nombre=?, descripcion=? WHERE id=?`,
    [nombre, descripcion, id],
    (err, rows, fiedls) => {
      if (!err) {
        res.json({ status: "tipo_usuario actualizado" });
      } else {
        console.log(err.message);
      } //Fin si
    }
  );
});

//Metodo DELETE - Permite eliminar el tipo usuario  por medio del id
router.delete("/tipo_usuario/:id", (req, res) => {
  const { id } = req.params;
  
  mysqlConnection.query(
    `DELETE FROM tipo_usuario WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.json({ status: `El tipo_usuario ha sido eliminado` });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;