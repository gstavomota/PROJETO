const Artistas = require('../models/Artistas')

class ArtistaService {
    async criacao(body){
        await Artistas.create(body);
    }

    async resgata(){
        return await Artistas.findAll({ raw: true });
    }

    async procuraArtista(id){
        return await Artistas.findByPk(id)
    }

    async atualiza(dadosArtista, id){
        return await Artistas.update(dadosArtista, { where: { id: id } })
    }

    async apaga(id){
        return await Artistas.destroy({ where: { id: id } })
    }
};

module.exports = new ArtistaService();