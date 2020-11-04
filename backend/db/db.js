const mysql = require('mysql');
const mysqlConnection = mysql.createConnection(
    {
        host: 'buktf3dozrms376qq5kr-mysql.services.clever-cloud.com',
        user: 'u9vzkyriexit4dxq',
        password: 'JYe0xqCNM5WrAAjJLV3a',
        database: 'buktf3dozrms376qq5kr',
        multipleStatements: true
    }
); //Fin createConnection

mysqlConnection.connect(function(err) {
        //Si hay un error entonces
    if(err){
        //Verdadero
     console.error(err);
     return;
        //Si no
    }else{}
        //Todo está bien (falso)
     console.log('Base de datos conectada');
});//Fin si err

module.exports = mysqlConnection;