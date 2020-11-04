const express = require('express');
const app = express();
const routes = require('./routes/routes');
const modulos = require('./routes/modulos');
const colegios = require('./routes/colegios');

//Ajustes
app.set('port', 3000);

//Middleware
app.use(express.json());

//Ajustes
app.use('/api', routes);
app.use('/api/modulos', modulos);
app.use('/api/colegios', colegios);

app.listen(app.get('port'), () => {
    console.log('servidor corriendo en puerto ' + app.get('port'));
});