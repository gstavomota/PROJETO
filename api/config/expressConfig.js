const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}));

const musicaRouter = require('../src/domains/musicas/controllers/index');
const artistaRouter = require('../src/domains/artistas/controllers/index');
const usuarioRouter = require('../src/domains/usuarios/controllers/index');

const naoEncontrada = require('../middlewares/rotaNaoEncontrada');

app.use('/api/musica', musicaRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/artista', artistaRouter);

app.use(naoEncontrada)

module.exports = app;