const express = require('express');
const app = express();
const calendario = require('./routes/calendario');
const calificacion = require('./routes/calificacion');
const control_mensual = require('./routes/control_mensual');
const obstetra = require('./routes/obstetra');
const recordatorio = require('./routes/recordatorio');
const tipo = require('./routes/tipo');
const usuario = require('./routes/usuario');

//Ajustes
app.set('port', 3000);

//Middleware
app.use(express.json());

//Ajustes
app.use('/api/calendario', calendario);
app.use('/api/calificacion', calificacion);
app.use('/api/control_mensual', control_mensual);
app.use('/api/obstetra', obstetra);
app.use('/api/recordatorio', recordatorio);
app.use('/api/tipo', tipo);
app.use('/api/usuario', usuario);


app.listen(app.get('port'), () => {
    console.log('servidor corriendo en puerto ' + app.get('port'));
});