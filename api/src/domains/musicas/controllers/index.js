const express = require('express');
const router = express.Router();
const Musica = require('../models/Musica');

router.get('/', (req,res) =>{
    res.status(200).send(Musica);
})

router.post('/',(req,res) =>{
    console.log(req.body);
    Musica.push(req.body);

    res.status(200).send(req.body);
});

router.put('/:nome',(req,res)=>{
    var nome = req.params.nome;
    //const achaMusica = Musica.find(Musica=>Musica.nome === nome);
    const achaMusica = Musica.findIndex(Musica=>Musica.nome === nome);

    console.log(achaMusica);
    Musica[achaMusica].nome = req.body.nome;
    Musica[achaMusica].artista = req.body.artista;
    Musica[achaMusica].genero = req.body.genero;
    Musica[achaMusica].quantidadeDownloads = req.body.quantidadeDownloads;

    res.status(200).send(Musica[achaMusica]);
});

router.delete('/:nome',(req,res)=>{
    var nomeDel = req.params.nome;

    const achaMusicaDel = Musica.findIndex(Musica => Musica.nome === nomeDel);
    
    Musica.splice(achaMusicaDel,1);

    res.status(200).send(Musica);
})


module.exports = router;
