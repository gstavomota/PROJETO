const express = require('express');
const router = express.Router();
const Artistas = require('../models/Artistas');
const ArtistaService = require('../service/ArtistaService');

//ROTAS

router.get('/', async (req, res) => {
    try {
        const artista = await ArtistaService.resgata();
        console.log(artista)
        res.status(200).send(artista);
    } catch {
        res.status(400);
    }

})

router.post('/', async (req, res) => {

    try {
        const body = req.body;
        await ArtistaService.criacao(body);

        res.status(200).send(req.body);
    } catch {
        res.status(400);
    }
});

router.put('/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const achaArtista = await ArtistaService.procuraArtista(id);

        const nome = req.body.nome
        const nacionalidade = req.body.nacionalidade
        const foto = req.body.foto

        const dadosArtista = {
            nome,
            nacionalidade,
            foto,
        }

        await ArtistaService.atualiza(dadosArtista, id);

        res.status(200).send(achaArtista);

    } catch {
        res.status(400);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        var id = req.params.id;

        const achaArtista = await ArtistaService.procuraArtista(id);
        ArtistaService.apaga(id);

        res.status(200).send(achaArtista);
    }
    catch {
        res.status(400);
    }
})

module.exports = router;