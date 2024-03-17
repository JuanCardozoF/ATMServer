require('dotenv').config();
const postgres = require('postgres');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD,PORT2} = process.env;

const sql = postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: PORT2,
    ssl: true, 
});

sql`SELECT NOW()`.then((result) => {
    console.log('Conexión exitosa a la base de datos.');
    console.log('Fecha y hora actuales en la base de datos:', result[0].now);
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

module.exports = sql;