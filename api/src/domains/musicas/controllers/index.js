const express = require('express');
const router = express.Router();
const Musica = require('../models/Musica');
const Usuario = require('../models/Usuario')
const Artistas = require('../models/Artistas')
const Musicas = require('../models/Musicas')
const UsuarioMusica = require('../models/UsuarioMusica')

router.get('/usuario', async(req,res) =>{
    const usuarios = await Usuario.findAll({raw:true})
    console.log(usuarios)
    res.status(200).send(usuarios);
})

router.post('/usuario',async(req,res) =>{

    const body = req.body;
    await Usuario.create(body);

    res.status(200).send(req.body);
});

router.put ('/usuario/:id',async(req,res)=>{
    var id = req.params.id;
    const achaUsuario = await Usuario.findOne({raw: true, where:{id: id}})

    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    const cargo = req.body.cargo

    const dadosUsuario = {
        nome,
        email,
        senha,
        cargo,
    }

    await Usuario.update(dadosUsuario, { where: {id: id}})

    res.status(200).send(achaUsuario);
});

router.delete('/usuario/:id',async(req,res)=>{
    var id = req.params.id;

    const achaUsuario = await Usuario.findOne({raw: true, where:{id: id}})    
    Usuario.destroy({where:{id:id}})

    res.status(200).send(achaUsuario);
})
// router.get('/', (req,res) =>{
//     res.status(200).send(Musica);
// })

// router.post('/',(req,res) =>{
//     console.log(req.body);
//     Musica.push(req.body);

//     res.status(200).send(req.body);
// });

// router.put('/:nome',(req,res)=>{
//     var nome = req.params.nome;
//     //const achaMusica = Musica.find(Musica=>Musica.nome === nome);
//     const achaMusica = Musica.findIndex(Musica=>Musica.nome === nome);

//     console.log(achaMusica);
//     Musica[achaMusica].nome = req.body.nome;
//     Musica[achaMusica].artista = req.body.artista;
//     Musica[achaMusica].genero = req.body.genero;
//     Musica[achaMusica].quantidadeDownloads = req.body.quantidadeDownloads;

//     res.status(200).send(Musica[achaMusica]);
// });

// router.delete('/:nome',(req,res)=>{
//     var nomeDel = req.params.nome;

//     const achaMusicaDel = Musica.findIndex(Musica => Musica.nome === nomeDel);
    
//     Musica.splice(achaMusicaDel,1);

//     res.status(200).send(Musica);
// })


module.exports = router;
