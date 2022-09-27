const sequelize = require('../../../../database/index');
const {DataTypes, Sequelize} = require('sequelize');
const Musicas = require('../../musicas/models/Musicas');
const Usuario = require('../../usuarios/models/Usuario');


const UsuarioMusica = sequelize.define('UsuarioMusica',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    }
});

// UsuarioMusica.associate = (models) =>
// {
//     Usuario.belongsToMany(Musicas,{
//         through:UsuarioMusica,
//         as: 'musica',
//         foreignKey: 'user_id',
//         otherkey:'musica_id'
//     });

//     Musicas.belongsToMany(Usuario,{
//         through:UsuarioMusica,
//         as: 'usuario',
//         foreignKey: 'musica_id',
//         otherkey:'user_id'
//     });
// };
// Usuario.hasMany(Musicas)
// Musicas.hasMany(Usuario)

UsuarioMusica.sync({alter: true, force: true})
    .then(()=>{
        console.log('Tabela de UsuariosMusica foi (re)criada');
    })
    .catch((err)=>console.log(err));
    
module.exports = UsuarioMusica;
