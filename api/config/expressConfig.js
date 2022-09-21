const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}));

const musicaRouter = require('../src/domains/musicas/controllers/index');
const naoEncontrada = require('../middlewares/rotaNaoEncontrada');

app.use('/api/musica', musicaRouter);
app.use(naoEncontrada)

module.exports = app;