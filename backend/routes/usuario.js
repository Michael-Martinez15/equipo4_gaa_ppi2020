const { Router } = require("express");
const router = Router();
const mysqlConnection = require("../db/db");
const TIPO_USUARIO_MUJER_GESTANTE = 1;
//Metodo GET - Permite mostrar los usuarios
router.get("/usuario", (req, res) => {
  let { campoBusqueda } = req.query;

  let usuario = [campoBusqueda, campoBusqueda, TIPO_USUARIO_MUJER_GESTANTE];

  let buscarUsuario = `SELECT id, nombre, apellido, correo, contrasena, numero_celular,
    fecha_embarazo, id_tipo_usuario FROM usuario WHERE (correo LIKE CONCAT("%", ?, "%") OR numero_celular LIKE CONCAT("%", ?, "%")) AND id_tipo_usuario = ?`;

  mysqlConnection.query(buscarUsuario, usuario, (err, rows, fiedls) => {
    //Si no hay error
    if (!err) {
      //Verdadero
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//Metodo POST - Permite enviar un usuario
router.post("/usuario", (req, res) => {
  const {
    id,
    nombre,
    apellido,
    correo,
    contrasena,
    numero_celular,
    fecha_embarazo,
    id_tipo_usuario
  } = req.body;

  let usuario = [
    id,
    nombre,
    apellido,
    correo,
    contrasena,
    numero_celular,
    fecha_embarazo,
    id_tipo_usuario
  ];

  let nuevoUsuario = `INSERT INTO usuario (id, nombre, apellido, correo, contrasena, numero_celular,
        fecha_embarazo, id_tipo_usuario) VALUES (?,?,?,?,?,?,?,?);`;

  mysqlConnection.query(nuevoUsuario, usuario, (err, results, fiedls) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.json({ message: "Usuario Ingresado" });
    }
  });
});

//Metodo PUT - Permite actualizar un usuario por medio del id
router.put("/usuario/:id", (req, res) => {
  const {
    nombre,
    apellido,
    correo,
    contrasena,
    numero_celular,
    fecha_embarazo,
    id_tipo_usuario
  } = req.body;

  const { id } = req.body;
  mysqlConnection.query(
    `UPDATE usuario SET nombre=?, apellido=?, correo=?, contrasena=?, numero_celular=?,
                           fecha_embarazo=?, id_tipo_usuario=? WHERE id=?`,
    [
      nombre,
      apellido,
      correo,
      contrasena,
      numero_celular,
      fecha_embarazo,
      id_tipo_usuario,
      id
    ],
    (err, rows, fiedls) => {
      if (!err) {
        res.json({ status: "Usuario actualizado" });
      } else {
        console.log(err.message);
      } //Fin si
    }
  );
});

//Metodo DELETE - Permite eliminar el usuario por medio del id
router.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM usuario WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.json({ status: `El usuario ha sido eliminado` });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
