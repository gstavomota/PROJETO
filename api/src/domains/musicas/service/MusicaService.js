const Musicas = require('../models/Musicas')

class MusicService{
    async resgata(){
       return await Musicas.findAll({raw:true})
    }

    async criacao(body){
        return await Musicas.create(body);
    }

    async procuraMusica(id){
        return await Musicas.findByPk(id)
    }

    async atualiza(dadosMusica, id){
        return await Musicas.update(dadosMusica, { where: { id: id } })
    }

    async apaga(id){
        return await Musicas.destroy({ where: { id: id } })
    }
}

module.exports = new MusicService();