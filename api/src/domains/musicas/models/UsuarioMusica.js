const sequelize = require('../../../../database/index');
const {DataTypes, Sequelize} = require('sequelize');
const Musicas = require('./Musicas');
const Usuario = require('./Usuario');


const UsuarioMusica = sequelize.define('UsuarioMusica',{});

UsuarioMusica.associate = (models) =>
{
    Usuario.belongsToMany(Musicas,{
        through:UsuarioMusica,
        as: 'musica',
        foreignKey: 'user_id',
        otherkey:'musica_id'
    });

    Musicas.belongsToMany(Usuario,{
        through:UsuarioMusica,
        as: 'usuario',
        foreignKey: 'musica_id',
        otherkey:'user_id'
    });
};
// Usuario.hasMany(Musicas)
// Musicas.hasMany(Usuario)

UsuarioMusica.sync({alter: false, force: false})
    .then(()=>{
        console.log('Tabela de UsuariosMusica foi (re)criada');
    })
    .catch((err)=>console.log(err));
    
module.exports = UsuarioMusica;
