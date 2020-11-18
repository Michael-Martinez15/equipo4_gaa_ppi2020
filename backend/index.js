const express = require('express');
const app = express();

//Middleware
app.use(express.json());

const calendario = require('./routes/calendario.js');
const calificacion = require('./routes/calificacion.js');
const control_mensual = require('./routes/control_mensual.js');
const recordatorio = require('./routes/recordatorio.js');
const tipo_usuario = require('./routes/tipo_usuario.js');
const usuario = require('./routes/usuario.js');
app.use(express.urlencoded({extended: false}));



//Ajustes
app.use('/api', calendario);
app.use('/api', calificacion);
app.use('/api', control_mensual);
app.use('/api', recordatorio);
app.use('/api', tipo_usuario);
app.use('/api', usuario);


app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000');
});