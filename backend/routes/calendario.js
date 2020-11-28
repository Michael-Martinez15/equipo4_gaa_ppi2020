const { Router } = require("express");
const router = Router();
const mysqlConnection = require("../db/db");

//Metodo GET - Permite mostrar las fechas
router.get("/calendario", (req, res) => {
  let { mujerGestante } = req.query;

  let calendarioMujerGestante = [mujerGestante];

  let buscarCalendario = `SELECT calendario.fecha, calendario.descripcion FROM calendario INNER JOIN ingreso ON ingreso.id_calendario = calendario.id where ingreso.id_usuario = ?`;

  mysqlConnection.query(
    buscarCalendario,
    calendarioMujerGestante,
    (err, rows, fiedls) => {
      //Si no hay error
      if (!err) {
        //Verdadero
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//Metodo POST  Permite enviar una fecha
router.post("/calendario", (req, res) => {
  const { fecha, descripcion, idUsuario } = req.body;

  let calendario = [fecha, descripcion];

  let nuevoCalendario = `INSERT INTO calendario (fecha, descripcion) VALUES (?,?)`;

  mysqlConnection.query(nuevoCalendario, calendario, (err, results, fiedls) => {
    if (err) {
      return console.error(err.message);
    } else {
      let idCalendario = results.insertId;
      let nuevoIngreso = [idUsuario, idCalendario];

      let nuevoIngresoSQL = `INSERT INTO ingreso (id_usuario, id_calendario) VALUES (?, ?)`;

      mysqlConnection.query(
        nuevoIngresoSQL,
        nuevoIngreso,
        (err, results, fiedls) => {
          if (err) {
            return console.error(err.message);
          } else {
            res.json({ message: "Fecha Ingresada" });
          }
        }
      );
    }
  });
});

//Metodo PUT - Permite actualizar la fecha por medio del id
router.put("/calendario/:id", (req, res) => {
  const { fecha, descripcion } = req.body;

  const { id } = req.body;
  mysqlConnection.query(
    `UPDATE calendario SET fecha=?, descripcion=? WHERE id=?`,
    [fecha, descripcion, id],
    (err, rows, fiedls) => {
      if (!err) {
        res.json({ status: "Fecha actualizada" });
      } else {
        console.log(err.message);
      } //Fin si
    }
  );
});

//Metodo DELETE - Permite eliminar la fecha por medio del id
router.delete("/calendario/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM calendario WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.json({ status: `La fecha ha sido eliminada` });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
