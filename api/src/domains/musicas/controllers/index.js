const express = require('express');
const router = express.Router();
const Musicas = require('../models/Musicas')
const MusicService = require('../service/MusicaService')
//ROTAS

router.get('/', async (req, res) => {
    try {
        const musica = await MusicService.resgata();
        console.log(musica)
        res.status(200).send(musica);
    } catch {
        res.status(400);
    }

})

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        await MusicService.criacao(body);

        res.status(200).send(req.body);
    } catch {
        res.status(400);
    }

});

router.put('/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const achaMusica = await MusicService.procuraMusica(id);
        const titulo = req.body.titulo
        const ArtistaId = req.body.ArtistaId
        const foto = req.body.foto
        const categoria = req.body.categoria

        const dadosMusica = {
            titulo,
            ArtistaId,
            foto,
            categoria,
        }

        await MusicService.atualiza(dadosMusica, id);

        res.status(200).send(achaMusica);

    } catch {
        res.status(400);
    }

});

router.delete('/:id', async (req, res) => {
    try {
        var id = req.params.id;

        const achaMusica = await MusicService.procuraMusica(id);
        MusicService.apaga(id);

        res.status(200).send(achaMusica);
    } catch {
        res.status(400);
    }

})

module.exports = router;
