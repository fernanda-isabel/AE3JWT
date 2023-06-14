const express = require('express');
const { getConnection } = require('./db/db-config');
const cors = require('cors');
const UsuarioRoute = require('./routes/usuario');
const AuthRoute = require('./routes/auth');
const tipoEquipo = require('./routes/tipoEquipo');
const estado = require('./routes/estado');
const marca = require('./routes/marca');
const inventario = require('./routes/inventario');

getConnection();

const app = express();

app.use(cors());

app.use(express.json());



app.use('/usuario', UsuarioRoute);
app.use('/login', AuthRoute);
app.use('/tipoequipos', tipoEquipo);
app.use('/estados', estado);
app.use('/marcas', marca); 
app.use('/inventarios', inventario);


app.listen(4000, () => {
    console.log('Servidor Iniciado');
});




module.exports = app;