const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const UsuarioService = require('../service/UsuarioService')

router.get('/', async (req, res) => {
    const usuarios = await UsuarioService.resgata();
    console.log(usuarios)
    res.status(200).send(usuarios);
})

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        await UsuarioService.criacao(body);
        res.status(200).send(req.body);

    } catch (error) {
        res.status(400);
    }

});

router.put('/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const achaUsuario = await UsuarioService.procuraUsuarios(id);

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

        await UsuarioService.atualiza(dadosUsuario, id);

        res.status(200).send(achaUsuario);
    } catch {
        res.status(400);
    }

});

router.delete('/:id', async (req, res) => {
    try {
        var id = req.params.id;

        const achaUsuario = await UsuarioService.procuraUsuarios(id);
        UsuarioService.apaga(id);

        res.status(200).send(achaUsuario);
    } catch {
        res.status(400);
    }

})

module.exports = router;