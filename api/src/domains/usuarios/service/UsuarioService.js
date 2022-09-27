const Usuario = require('../models/Usuario')

class UsuarioService{
    async resgata(){
       return await Usuario.findAll({raw:true})
    }

    async criacao(body){
        return await Usuario.create(body);
    }

    async procuraUsuarios(id){
        return await Usuario.findByPk(id)
    }

    async atualiza(dadosUsuarioa, id){
        return await Usuario.update(dadosUsuarioa, { where: { id: id } })
    }

    async apaga(id){
        return await Usuario.destroy({ where: { id: id } })
    }
}

module.exports = new UsuarioService();